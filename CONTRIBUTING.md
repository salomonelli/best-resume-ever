# How to contribute efficiently

## Table of contents

- [Reporting bugs](#reporting-bugs)
- [Contributing pull requests](#contributing-pull-requests)
- [Documentation Guidelines](#documentation-guidelines)

**Please read the first section before reporting a bug!**

## Reporting bugs

It is important to ** open *one* issue for *one* bug**. If you notice
several bugs and want to report them, make sure to create one new issue for
each of them.

If you're reporting a new bug, follow these guidelines:

### Specify the platform

**In your bug reports, please always specify:**

- Operating system and version (e.g. Windows 10, macOS 10.15, Ubuntu 19.10)
- version of software 

### Specify steps to reproduce

Many bugs can't be reproduced unless specific steps are taken. Please **specify
the exact steps** that must be taken to reproduce the condition, and try to
keep them as minimal as possible.

Making your bug report easy to reproduce will make it easier for contributors
to fix the bug.


## Contributing pull requests

If you want to add new features, please make sure that:

- This functionality is desired, which means that it solves a common use case
  that several users will need in their real-life projects.

- Even if it doesn't get merged, your PR is useful for future work by another
  developer.

### Document your changes

This is to ensure the documentation coverage doesn't decrease as contributions
are merged.

If your pull request modifies parts of the code in a non-obvious way, make sure
to add comments in the code as well. This helps other people understand the
change.

### Write unit tests

When fixing a bug or contributing a new feature, we recommend including unit
tests in the same commit as the rest of the pull request. Unit tests are pieces
of code that compare the output to a predetermined *expected result* to detect
regressions. Tests are compiled and run on GitHub Actions for every commit and
pull request.

Pull requests that include tests are more likely to be merged, since we can have
greater confidence in them not being the target of regressions in the future.

For bugs, the unit tests should cover the functionality that was previously
broken. If done well, this ensures regressions won't appear in the future
again. For new features, the unit tests should cover the newly added
functionality, testing both the "success" and "expected failure" cases if
applicable.

Feel free to contribute standalone pull requests to add new tests or improve
existing tests as well.

### Be nice to the Git history

Try to make simple PRs that handle one specific topic. Just like for reporting
issues, it's better to open 3 different PRs that each address a different issue
than one big PR with three commits.

Also try to make commits that bring the engine from one stable state to another
stable state, i.e. if your first commit has a bug that you fixed in the second
commit, try to merge them together before making your pull request 

This [Git style guide](https://github.com/agis-/git-style-guide) has some
good practices to have in mind.


### Format your commit messages with readability in mind

The way you format your commit messages is quite important to ensure that the
commit history and changelog will be easy to read and understand. A Git commit
message is formatted as a short title (first line) and an extended description
(everything after the first line and an empty separation line).

The short title is the most important part, as it is what will appear in the
`shortlog` changelog (one line per commit, so no description shown) or in the
GitHub interface unless you click the "expand" button. As the name says, try to
keep that first line under 72 characters. It should describe what the commit
does globally, while details would go in the description. Typically, if you
can't keep the title short because you have too much stuff to mention, it means
you should probably split your changes in several commits :)


**Note:** When using the GitHub online editor or its drag-and-drop
feature, *please* edit the commit title to something meaningful.

## Documentation Guidelines

### What makes good documentation?

**Documentation should be well written in plain English, using well-formed sentences and various levels of sections and subsections. It should be clear and objective.:**

- Use the direct voice
- Use precise action verbs
- Avoid verbs that end in -ing
- Remove unnecessary adverbs and adjectives.
- Ban these 8 words: obvious, simple, basic, easy, actual, just, clear, and however
- Use explicit references
- Use 's to show possession
- Use the Oxford comma

There are 3 rules to describe classes:

- Give an overview of the node in the brief description

- Mention what methods return if it's useful

- Use "if true" to describe booleans


