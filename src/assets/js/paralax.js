$(document).ready(function() {

            $pantalla = $(window);

            $('.parallax').each(function() {
                var $this = $(this);
                $pantalla.scroll(function() {
                    var y = -($pantalla.scrollTop() / $this.data('movimiento'));
                    var xy = '50% ' + y + 'px';
                    $this.css({ backgroundPosition: xy });
                });
            });

            $(window).scroll(function() {
                if ($(this).width() < 700) {
                    $('.parallax').each(function() {
                        var $this = $(this);
                        $pantalla.scroll(function() {
                            var y = -($pantalla.scrollTop() / $this.data('movimiento'));
                            var xy = '50% ' + y + '0px';
                            $this.css({ backgroundPosition: xy });
                        });
                    });
                }

            })