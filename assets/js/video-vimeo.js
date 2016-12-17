(function($) {
  var vimeoPlayers = new Array();
  $.extend($.base, {
    video_vimeo : {
      init: function() {
        $.base.video_vimeo.frames();
      },
      frames: function() {
        var $frames = $('.full-video .video-frame[data-video="vimeo"]');
        $frames.length > 0 && $.base.video_vimeo.player({ frames: $frames });
        return $frames;
      },
      player: function(params) {
        params.frames.each(function(key, frame) {
          var baseUrl = 'https://player.vimeo.com/video/';
          var baseApiUrl = 'http://www.vimeo.com/api/v2/video/';
          var videoId = $(frame).data('video-id');

          var iframe = document.createElement('iframe');
          iframe.setAttribute('id', 'frame-vimeo-id-' + videoId);
          iframe.setAttribute('class', 'vimeoplayer');
          iframe.setAttribute('src', baseUrl + videoId + '?api=1');
          iframe.setAttribute('width', '560');
          iframe.setAttribute('height', '315');
          iframe.setAttribute('frameborder', '0');
          iframe.setAttribute('scrolling', 'no');
          iframe.setAttribute('marginWidth', '0');
          iframe.setAttribute('marginHeight', '0');
          iframe.setAttribute('webkitAllowFullScreen', '0');
          iframe.setAttribute('mozallowfullscreen', '0');
          iframe.setAttribute('allowFullScreen', '0');
          frame.appendChild(iframe);

          vimeoPlayers.push({
            frame: frame,
            videoId: videoId
          });

          var player = $f(iframe);

          $(".full-video-modal.modal").on("hidden.bs.modal", function() {
            player.api('pause');
          });

          $(document).on('click', '#video-play-'+ videoId, function(e) {
            e.preventDefault();
            player.api('play');
          });

          $(document).on('click', '#video-pause-'+ videoId, function(e) {
            e.preventDefault();
            player.api('pause');
          });
        });
      }
    }
  })
})(jQuery);