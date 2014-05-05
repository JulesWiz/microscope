if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  var julId = Meteor.users.insert({
    profile: { name: 'Jules' }
  });

  var jul = Meteor.users.findOne(julId);

  var harId = Meteor.users.insert({
    profile: { name: 'Harry' }
  });

  var har = Meteor.users.findOne(harId);

  var introduceId = Posts.insert({
    title: 'Introducing Julie',
    userId: jul._id,
    author: jul.profile.name,
    url: 'http://ngjulie.meteor.com',
    submitted: now - 7 * 3600 * 1000
  });

  Comments.insert({
    postId: introduceId,
    userId: jul._id,
    author: jul.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'How do you create the developer account?'
  });

  Comments.insert({
    postId: introduceId,
    userId: har._id,
    author: har.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'Just log in to www.meteor.com.'
  });

  Posts.insert({
    title: 'Verybite',
    userId: har._id,
    author: har.profile.name,
    url: 'http://verybite.com',
    submitted: now - 10 * 3600 * 1000
  });

  Posts.insert({
    title: 'Julie Ng',
    userId: jul._id,
    author: jul.profile.name,
    url: 'http://linkedin.com/julieasia',
    submitted: now - 12 * 3600 * 1000
  });
}