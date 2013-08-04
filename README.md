jsgroup-awesomegrid
===================

Link to the hosted version [here](http://blanciq.github.io/jsgroup-awesomegrid/)

Instruction how to update hosted version
===================

Instruction to sync gh-pages branch (so it's visible on hosted version) with the master branch:

    git checkout gh-pages
    git merge master

If there's a conflict, we will usually resolve it using theirs

    git checkout --theirs <filename>
    git add <filename>

Now finally commiting new content to gh-pages

    git commit -m "message"
    git push gh-pages
