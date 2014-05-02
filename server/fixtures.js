if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Julie',
    author: 'JulesWiz',
    url: 'http://ngjulie.meteor.com'
  });

  Posts.insert({
    title: 'Verybite',
    author: 'Jules Verybite',
    url: 'http://verybite.com'
  });

  Posts.insert({
    title: 'Julie Ng',
    author: 'Linked in',
    url: 'http://linkedin.com/julieasia'
  });
}