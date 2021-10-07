/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = [{
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}];

$(document).ready(() => {
  const renderTweets = function(tweets) {
    for (let i of tweets) {
      const $tweet = createTweetElement(i);
      $('#tweets-container').append($tweet);
    }
  }

  const createTweetElement = (tweet) => {
    console.log("Hello", tweet);
    const createdAtTimeAgo = timeago.format(tweet.created_at);
    return `<article class="tweet">
    <header>
      <img class="person-img" src =${tweet.user.avatars} alt="Person">
      <h3 class="name">${tweet.user.name}</h3>
      <p class="handle">${tweet.user.handle}</h3>
    </header>
    <p>${tweet.content.text}</p>
    <footer>
      <p>${createdAtTimeAgo}</p>
      <div class="tools">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
  </article> `
  }

  renderTweets(tweetData);
  //const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  //console.log($tweet); // to see what it looks like
  //$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
})