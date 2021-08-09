<link href="https://cdn.jsdelivr.net/npm/tom-select@1.7.7/dist/css/tom-select.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/tom-select@1.7.7/dist/js/tom-select.complete.min.js"></script>

<style>
    .icon{
        width: 3rem;
    }
</style>

<select id="select-tags" name="tags[]" multiple placeholder="جستجوی تگ" autocomplete="off">
    @if(isset($article))
        @foreach($article->tag()->get() as $tag)
            <option value="{{ $tag->id }}" selected>{{ $tag->name }}</option>
        @endforeach
    @endif
</select>


<script>
    new TomSelect('#select-tags',{
        plugins: {
            remove_button:{
                title:'حذف',
            }
        },
        valueField: 'id',
        labelField: 'label',
        searchField: ['label','type'],
        // fetch remote data
        load: function(query, callback) {
            // var self = this;
            // if( self.loading > 1 ){
            //     callback();
            //     return;
            // }

            var url = '{{ route('Tag > Ajax') }}?q=' + encodeURIComponent(query);
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    callback(json.result.list);
                    self.settings.load = null;
                }).catch(()=>{
                callback();
            });

        },
        // custom rendering function for options
        render: {
            option: function(item, escape) {
                return `<div class="py-2 d-flex">
							<div class="mb-1">
								<span class="h5">
									${ escape(item.label) }
								</span>
							</div>
					 		<div class="ms-auto">${ escape(item.type.join(', ')) }</div>
						</div>`;
            }
        },
    });
</script>




