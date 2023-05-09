                                  HOW TO CREATE A PULL REQUEST IN GITHUB

To create a pull request in Github, follow these steps:

Fork the repository: Go to the repository that you want to contribute to and click on the "Fork" button on the top right corner. This will create a copy of the repository in your Github account.

Clone the repository: Once the fork is complete, you will need to clone the repository to your local machine. Click on the green "Code" button and copy the URL. Open your terminal and type git clone (repository URL).

Create a new branch: Navigate to the cloned repository on your local machine using the terminal and create a new branch for your changes. Use the command git checkout -b (new branch name).

Make changes: Make the necessary changes to the files in the new branch.

Commit the changes: Once you have made the changes, you need to commit them. Use the command git add . to stage all the changes and then git commit -m "Your commit message" to commit the changes.

Push changes: After committing the changes, push them to your Github account using the command git push origin <new branch name>.

Create a pull request: Navigate to your forked repository on Github and click on the "New pull request" button. Select the base repository and branch that you want to merge your changes into and the head repository and branch where you made your changes.

Submit the pull request: Add a title and description for your pull request and then click on the "Create pull request" button.

Your pull request is now submitted and the repository owner can review your changes and merge them into the main branch if they are happy with them.

Source: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
