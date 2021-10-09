/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = (tweet) => {
  // eslint-disable-next-line
  const createdAtTimeAgo = timeago.format(tweet.created_at);
  return `<article class="tweet">
  <header>
    <img class="person-img" src =${tweet.user.avatars} alt="Person">
    <h3 class="name">${tweet.user.name}</h3>
    <p class="handle">${tweet.user.handle}</h3>
  </header>
  <p class="tweet-text">${tweet.content.text}</p>
  <footer>
    <p>${createdAtTimeAgo}</p>
    <div class="tools">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </footer>
</article> `;
};

const renderTweets = function(tweets) {
  for (let i of tweets) {
    const $tweet = createTweetElement(i);
    $('#tweets-container').prepend($tweet);
  }
};

$(document).ready(() => {
  const loadTweets = () => {
    $.get('/tweets')
      .done((response) => {
        console.log(response);
        renderTweets(response);
      })
      .fail((error) => {
        console.log('Something is wrong', error);
      });
  };
  loadTweets();

  const submitTweet = function() {
    const form = $('#tweet-form');
    form.on('submit', function(event) {
      event.preventDefault();
      const dataSerialized = $(this).serialize();
      const tweetLength = $('#tweet-text').val().length;
      if (tweetLength === 0 || tweetLength === null) {
        return $('#error-container').html('<span class="fas fa-exclamation-triangle">Write something in the tweet smh</span>').slideDown('slow');
        // alert("Write something in the tweet smh");
      }
      if (tweetLength > 140) {
        return $('#error-container').html('<span class="fas fa-exclamation-triangle">Fam you wrote too much take it easy big mans</span>').slideDown("slow");
        // return alert("Fam you wrote too much take it easy big mans");
      }
      $.post('/tweets', dataSerialized)
        .done(() => {
          loadTweets();
          console.log('Success');
          $('#tweet-text').val('');
          // Empty textarea
        })
        .fail(() => {
          console.log("Failed");
        });
      return $('#error-container').slideUp('slow');
    });
  };
  submitTweet();
  
  
  
 
  
});

// const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
//console.log($tweet); // to see what it looks like
//$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
