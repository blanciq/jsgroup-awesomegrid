jsgroup-awesomegrid
===================

Link to the hosted version [here](http://blanciq.github.io/jsgroup-awesomegrid/)

How to update hosted version
===================

Instruction to sync gh-pages branch (so it's visible on hosted version) with the master branch:

    git checkout gh-pages
    git merge master
    git push origin

If there's a conflict, we will need to do a couple more instruction between merge and pushing (assuming that we will be resolving it using theirs - as there won't be independent changes on gh-pages):

    git checkout --theirs <filename>
    git add <filename>
    git commit -m "message"
