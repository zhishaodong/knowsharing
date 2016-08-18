$(document).ready(function(){
    $('.pull-left').on('click','#user-setting',function(){
        var url = $(this).data('url');
        $.get(url,function(data){
            $("#uploadModal").html(data).modal();
        });
    });

    $('div').on('change','#inputImage',function(){
        var picture = document.getElementById('inputImage');
        var info = document.getElementById('tip-message');
        var preview = document.getElementById('picture-preview');
        if (!picture.value) {
            info.innerHTML = '没有选择文件';
            return false;
        }
        var file = picture.files[0];
        if (file.size >= 2097152) {
            alert('图片不能大于2M');
            return false;
        }
        if (file.type!=='image/jpeg'&&file.type!=='image/png'&&file.type!=='image/gif') {
            alert('不是有效的图片文件');
        }
        var reader = new FileReader();
        reader.onload = function(e){
            var data = e.target.result;
            // preview.style.backgroundImage = 'url('+data+')';
            var img = document.createElement("img");
            img.src = data;
            document.getElementById("picture-preview").appendChild(img);
        };
        reader.readAsDataURL(file);
    });

    $('#uploadModal').on('click','#upload-picture-btn', function(){
        var modal = $('#upload-picture-form').parents('.modal');
        var form = $('#upload-picture-form');
        var url = form.attr('action');
        console.log($('#upload-picture-form')[0]);
        var data = new FormData($('#upload-picture-form')[0]);
        console.log(data);
        $('#upload-picture-btn').button('submiting').addClass('disabled');
        $.ajax({
            url: url,
            type: "POST",
            data: data,
            dataType: 'JSON', 
            cache: false, 
            processData: false, 
            contentType: false,
            success:function(){
                // modal.modal('hide');
                // window.location.reload();
            }
        });
    });
});