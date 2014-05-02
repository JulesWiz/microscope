var postsData = [
  {
    title: 'Introducing Julie',
    author: 'JulesWiz',
    url: 'http://ngjulie.meteor.com'
  },
  {
    title: 'Verybite',
    author: 'Jules Verybite',
    url: 'http://verybite.com'
  },
  {
    title: 'Julie Ng',
    author: 'Linked in',
    url: 'http://linkedin.com/julieasia'
  }
];
Template.postsList.helpers({
  posts: function() {
    return Posts.find();
  }
});