$('#uploadModal').find('form').validate({
    rules: {
        'title': {
            required: true
        },
        'topic': {
            required: true
        },
        'tag': {
            required: true
        }
    },
    submitHandler:function(){
        var url = $('#uploadModal').find('form').attr('action');
        var tag = $('[name = tag]').val();
        var file = new FormData($('#uploadModal').find('form')[0]);
        file.append('tag',tag);
        $.ajax({
            url:url,
            cache:false,
            data:file,
            type:"POST",
            async:false,
            processData:false,
            contentType:false,
            success:function(data){
            location.reload();
            },
            error:function(jqXHR){
                alert("添加失败！");
            }
        })
    }
});