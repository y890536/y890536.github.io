var channelName = 'TechGuyWeb';

$(document).ready(function() {
    $.get(
        "https://www.googleapis.com/youtube/v3/channels", {
            part: 'contentDetails',
            forUsername: channelName,
            key: 'AIzaSyAFNRcBYd3ODoZJ1OF40Kkv3D3JA0TKV8s'
        },
        function(data) {
            $.each(data.items, function(i, item) {
                console.log(item);
                pid = item.contentDetails.relatedPlaylists.uploads;
                getVids(pid);
            })
        }
    );

    function getVids(pid) {
        $.get(
            "https://www.googleapis.com/youtube/v3/playlistItems", {
                part: 'snippet',
                maxResults: 10,
                playlistId: pid,
                key: 'AIzaSyAFNRcBYd3ODoZJ1OF40Kkv3D3JA0TKV8s'
            },
            function(data) {
                $.each(data.items, function(i, item) {
                    var output;
                    console.log(item);
                    videTitle = item.snippet.title;
                    videoId = item.snippet.resourceId.videoId;

                    output = '<li><iframe src=\"//www.youtube.com/embed/' + videoId + '\"></iframe></li>'

                    //Append to results listStyleTpe
                    $('#results').append(output);
                })
            }
        );
    }
});