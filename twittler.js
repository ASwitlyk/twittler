// twittler.js - all javascript added for Hack Reactor pre-curriculum 

//var index = streams.home.length - 1;

//var last_tweet_time = streams.home[index]['created_at'];

	$(document).ready(function(){
        var $body = $('body');
        var $tweets = $('#tweets');
      //   $body.html('');

        

        var index = streams.home.length - 1;

        var last_tweet_time = streams.home[index]['created_at'];

        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div></div>');
          $tweet.text('@' + tweet.user + ': ' + tweet.message);
          $tweet.appendTo($tweets);
          index -= 1;
        }

        //function will return an array with all of the new tweets up to the last tweet displayed. The function requires the global last_tweet_time variable and will update the variable to the timestamp of the last tweet in the return array 
        var newTweets = function() { 

          new_tweets = [];
          var index = streams.home.length - 1;
          var last_tweet_index = null;
          do {
            if(streams.home[index]['created_at'] === last_tweet_time) {
              last_tweet_index = index;
            }
            index--;

          } while(last_tweet_index === null || index >= 0);

          if(last_tweet_index != null) {  

            while(index >= last_tweet_index) {
              new_tweets.push(streams.home[index])
              index--;
            }

          }  // End of last_tweet_index != null IF

          return new_tweets;

        }  // End of newTweets function

        // When click newtweets button, fun newTweets function and get an array with all the new tweets and then display them

 	    });  // End of $(document).ready(function)
