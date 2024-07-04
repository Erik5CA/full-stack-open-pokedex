In the case of Python, for making the tests we need the library called pytest, also we nedd code formatted to make sure that our code follows the PEP 8 guidelines, there are plenty of different tools to choose from. If we want something that works out of the box, we can use black.For the case of linter the three most popular open-source ones are flake8, pylint, and the new kid on the block - ruff.

There are a few alternatives to Jenkins and GitHub Actions, some of the most popular are:
Spacelift provides an automated CI/CD workflow for your infrastructure changes, letting you stop writing flaky pipeline scripts to apply your Terraform plans or Kubernetes deployments.
GitLab CI/CD provides a platform for running pipelines directly alongside your GitLab repositories.
CircleCI is a commercial cloud-native CI/CD platform that’s designed to support pipelines running at scale.
Travis CI is a cloud-hosted CI service that’s designed to work especially well with GitHub repositories.
CodeShip is a CloudBees SaaS platform that provides a managed CI/CD experience in the cloud.
CodePipeline is a cloud-hosted CI/CD service that’s available as part of AWS.
Azure Pipelines is Microsoft’s CI/CD platform available within the Azure cloud.
Bitbucket Pipelines is the CI/CD tool available as part of Atlassian’s BitBucket Cloud.
TeamCity is a CI/CD platform that’s developed by IDE makers JetBrains.

Selecting the right CI/CD hosting model is critical for several reasons.
Cost: On-prem deployments are typically less costly because you don’t have to pay for cloud infrastructure.
Flexibility: In general, on-prem CI/CD suites are more flexible because they don’t bind you to a specific cloud platform.
Speed and performance: On the whole, cloud-based CI/CD suites tend to lead to better speed and performance. Cloud-based software is easier to scale, and if you are also hosting your applications in the cloud, you can deploy directly from the cloud, as noted above.
To sum up, on-prem CI/CD offers more control and lower costs. It’s also more secure in some respects. On the other hand, cloud-based CI/CD software is more scalable and lends itself to higher performance, in terms of the speed of CI/CD operations like deployment.
