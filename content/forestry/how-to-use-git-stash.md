---
category: web development
tags:
- version control
- git
- github
date_published: 2021-02-16T07:38:19Z
title: How to use git stash
body: 'Even if you haven''t used `git stash`, you''ve probably encountered this scenario
  many times:'
date_updated: 
summary: What to do when you are in the midst of changing in a branch, and you want
  to check out another branch? You stash it away, of course.
featured_image: "/uploads/glen-carrie-6kmkmxfafxa-unsplash.jpg"
image_credit: <span>Photo by <a href="https://unsplash.com/@glencarrie?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Glen
  Carrie</a> on <a href="https://unsplash.com/s/photos/drawer?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

---
When working with Git, suppose you move to a new branch and make some changes in a file that would create a conflict with the main branch.

Next, for whatever reason, you try to check out your main branch with `git checkout main` . You will get this notification: “Your local changes to the following files would be overwritten by checkout…”.

And this notification is impossible to ignore. Git won't let you check out unless you take either of these two actions:

* Commit your changes in the existing branch, or
* Stash it away.

The first option is clearly out of question because we are not ready for a commit yet. That leaves us with the only options: stashing.

Even if you've never used `git stash`, you've probably encountered this scenario many times.

Stashing may sound intimidating, but I promise you that it's not, and I believe it should be introduced in beginner Git courses.

Using stash is very simple. Simply type \`git stash save\` followed by a name you want to give to the stash. The name can be anything you want, but it's good to give it a descriptive label so we can find it later.

Now, if you run \`git status\`, you should see a message saying that the working tree is clean. That's because those changes have been moved into the Stash, a distinct area from the repository, the staging index, or the working directory

By default, Stash doesn't include untracked files because there won't be a conflict with other branches. A stash is like putting something into a drawer to use it later.

Changes in the stash are independent of the branches that you're on. That means you can look up a stash from any branch, and this stash is available to all of the branches.