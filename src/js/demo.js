var BScroll = new BScroll('.nav', {
    scrollX: true,
    scrollY: false,
    click: true
});
$('.nav ul').on('click', 'li', function() {
    $(this).addClass('active').siblings().removeClass('active');
})
var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination'
    }
})
$.ajax({
    url: '/api/data',
    success: function(data) {
        var json = JSON.parse(data);
        if (json.code == 0) {
            var str = '';
            json.obj.forEach(function(file) {
                str += ` <li>
                <dl>
                    <dt>
                        <h2>${file.title}</h2>
                        <p>${file.author}  <span>${file.num}</span>阅 </p>
                    </dt>
                    <dd>
                        <img src="img/${file.img}" alt="">
                    </dd>
                </dl>
            </li>`;
            })
            $('.list').html(str);

        }

    }
})