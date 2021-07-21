module.exports.index = function (req, res) {
  let posts = [
    {content: "this is the first post"},
    {content: "this is the second post"},
    {content: "this is the third post"},
  ];
  console.log("here..");
  return res.json(200, { message: "List of posts", posts: posts });
};
