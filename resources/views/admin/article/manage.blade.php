@extends('admin.template')

@section('meta')
<title>مدیریت مقالات</title>
@endsection

@section('content')
    <div class="tm-main uk-section uk-section-secondary">
        <div class="uk-container uk-container-small">
            <h2 id="lightbox" class="uk-h2 tm-heading-fragment">
                مدیریت مقالات
            </h2>
            <div class="uk-margin">
                <div>
                    <a href="{{ route('Article > New') }}" target="_blank" class="uk-button uk-button-small uk-border-rounded uk-button-primary">ایجاد مقاله</a>
                </div>
                <div class="uk-margin">
                  @if(isset($_GET['state']) && $_GET['state'] == 'all')
                    <a href="{{ route('Article > Manage') }}"><span style="background: darkgray" class="uk-label"><span uk-icon="icon: close"></span>
                      همه
                    </span></a>

                  @elseif(isset($_GET['state']) && $_GET['state'] == '0')
                  <a href="{{ route('Article > Manage') }}"><span style="background: darkgray" class="uk-label"><span uk-icon="icon: close"></span>
                    پیش‌نویس
                  </span></a>
                  @elseif(isset($_GET['state']) && $_GET['state'] == '-1')
                  <a href="{{ route('Article > Manage') }}"><span style="background: darkgray" class="uk-label"><span uk-icon="icon: close"></span>
                    زباله‌دان
                  </span></a>
                  @endif
                  @if(!isset($_GET['state']))
                    <a href="?state=all" class="uk-button uk-button-text uk-text-meta">نمایش همه</a> |
                    <a href="?state=0" class="uk-button uk-button-text uk-text-meta">پیش‌نویس</a> |
                    <a href="?state=-1" class="uk-button uk-button-text uk-text-meta">زباله‌دان</a>
                  @endif
                </div>
            </div>
            <div class="uk-margin">
                <ul uk-accordion>
                    <li class="uk-close uk-disabled">
                        <a class="uk-accordion-title uk-text-meta" href="#">
                            <span uk-icon="settings"></span>
                            اعمال فیلتر
                        </a>
                        <div class="uk-accordion-content">
                            <div class="uk-background-muted uk-padding-small">
                            <form method="get" class="uk-form-stacked">
                                <div class="uk-margin uk-grid-small" uk-grid>
                                    {{-- categories filter --}}
                                    <div class="uk-width-1-3@m">
                                        <div class="uk-form-label">
                                            <span uk-icon="folder"></span>
                                            دسته‌بندی
                                        </div>
                                        <div class="uk-form-controls" id="categories-filter">
                                            <select name="categories[]" id="categories" class="uk-select" multiple>
                                                @foreach($categories as $category)
                                                    <option value="{{ $category->id }}">{{ $category->name }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    {{-- author / state filter --}}
                                    <div class="uk-width-1-3@m">
                                        <div class="uk-form-label">
                                            <span uk-icon="user"></span>
                                            نویسنده
                                        </div>
                                        <div class="uk-form-controls" id="users-filter">
                                            <select name="author" class="uk-select">
                                                <option value="all">همه کاربران</option>
                                                @foreach($users as $user)
                                                    <option value="{{ $user->id }}">
                                                        @if( ($user->name != null) || ($user->famiy != null)  ) {{ $user->name . ' ' . $user->family . ' - ' }} @endif {{ $user->username }}
                                                    </option>
                                                @endforeach
                                            </select>
                                        </div>
                                        <div class="uk-form-label uk-margin-small-top">
                                            <span uk-icon="info"></span>
                                            وضعیت
                                        </div>
                                        <div class="uk-form-controls" id="state-filter">
                                            <select name="state" class="uk-select">
                                                <option value="1">همه</option>
                                                <option value="0">پیش‌نویس</option>
                                                <option value=-1>زباله‌دان</option>
                                            </select>
                                        </div>
                                    </div>
                                    {{-- condition type / action filter --}}
                                    <div class="uk-width-1-3@m uk-child-width-1-1">
                                        <div class="uk-form-label uk-disabled">
                                            <span uk-icon="cog"></span>
                                            نوع ترکیب
                                        </div>
                                        <div class="uk-form-controls" id="statement-filter">
                                            <select name="" class="uk-select uk-disabled">
                                                <option value="and">و</option>
                                                <option value="or">یا</option>
                                            </select>
                                        </div>
                                        <div class="uk-form-label uk-margin-small-top">
                                            <span uk-icon="check"></span>
                                            عملیات
                                        </div>
                                        <div class="uk-form-controls" id="state-filter">
                                            <button type="submit" class="uk-button uk-button-secondary">اعمال</button>
                                            <a href="{{ route('Article > Manage') }}" class="uk-text-muted uk-button uk-button-link"><span uk-icon="close"></span>حذف فیلتر‌ها</a>
                                        </div>
                                        <hr>
                                    </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            @if(count($articles) > 0)
                <div class="uk-overflow-auto">
                    <table class="uk-table uk-table-striped uk-table-hover">
                        {{--<caption>آخرین مقالات</caption>--}}
                        <thead>
                        <tr>
                            <th>عنوان مقاله</th>
                            <th>تاریخ انتشار</th>
                            <th>دسته‌بندی</th>
                            <th>برچسب‌ها</th>
                            <th>وضعیت</th>
                            <th>ویرایش</th>
                            <th>عملیات</th>
                            <th>حذف</th>
                            <th>بازدید</th>
                        </tr>
                        </thead>
                        <tfoot>
                        <tr>
                            <td>عنوان مقاله</td>
                            <td>تاریخ انتشار</td>
                            <th>دسته‌بندی</th>
                            <th>برچسب‌ها</th>
                            <th>وضعیت</th>
                            <th>ویرایش</th>
                            <th>عملیات</th>
                            <th>حذف</th>
                            <th>بازدید</th>
                        </tr>
                        </tfoot>
                        <tbody>
                        @include('admin.article.fetch')
                        </tbody>
                    </table>
                </div>
                {{ $articles->render("pagination::uikit-dark") }}

            @else
                <div class="uk-alert-warning" uk-alert>
                    <a class="uk-alert-close" style="color: black" uk-close></a>
                    <p>مقاله‌ای در سیستم موجود نیست.</p>
                </div>
            @endif
        </div>
    </div>
@endsection
