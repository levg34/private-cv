# Private CV

[![Backend CI](https://github.com/levg34/private-cv/actions/workflows/backend.yml/badge.svg)](https://github.com/levg34/private-cv/actions/workflows/backend.yml)
[![Frontend CI](https://github.com/levg34/private-cv/actions/workflows/frontend.yml/badge.svg)](https://github.com/levg34/private-cv/actions/workflows/frontend.yml)
[![codecov](https://codecov.io/gh/levg34/private-cv/graph/badge.svg?token=PNDT8I3M72)](https://codecov.io/gh/levg34/private-cv)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![linter: ESLint](https://img.shields.io/badge/linter-ESLint-purple?logo=ESLint)

This project aims to create a website to present a CV without any personal information. Recruiters can make a request to access the information they want to see by adding it to a cart. The owner of the CV will approve or reject the request, and if approved, the recruiter will receive a token valid for 48 hours to access the requested information. Otherwise, the information will be blurred, like a skeleton CV. Recruiters can click on the sections they want to read and add them to the cart before sending their request. Recruiters must connect with an OTP to send a request. There will also be a contact form if the recruiter wants to contact the owner of the CV without adding any information to the cart. In addition to these features, the recruiter can download a PDF version of the CV containing only the information they requested and that the owner authorized. It will also be possible to do a mini-tutorial to discover the owner's last name without session validation. To do this, the recruiter can add the last name to the cart and then validate the cart.

## Project Status

⚠️ **Warning:** This project is in the very early stages of development and is not yet functional. I am working alone on this project and welcome contributions from the community. Please note that the project is still in its early stages and may undergo significant changes as development progresses.

You can see the result of the latest build [here](https://levg34.github.io/private-cv/).

## Motivation

I wanted to have a way to show my CV to recruiter, without having any personal information accessible on the internet.

## Table of Contents

-   [Introduction](#introduction)
-   [Installation and Usage](#installation-and-usage)
-   [Features and Functionality](#features-and-functionality)
-   [Examples and Screenshots](#examples-and-screenshots)
-   [License](#license)
-   [Acknowledgments](#acknowledgments)

## Introduction

This project aims to create a website to present a CV without any personal information. Recruiters can make a request to access the information they want to see by adding it to a cart. The owner of the CV will approve or reject the request, and if approved, the recruiter will receive a token valid for 48 hours to access the requested information. Otherwise, the information will be blurred, like a skeleton CV. Recruiters can click on the sections they want to read and add them to the cart before sending their request. Recruiters must connect with an OTP to send a request. There will also be a contact form if the recruiter wants to contact the owner of the CV without adding any information to the cart. In addition to these features, the recruiter can download a PDF version of the CV containing only the information they requested and that the owner authorized. It will also be possible to do a mini-tutorial to discover the owner's last name without session validation. To do this, the recruiter can add the last name to the cart and then validate the cart.

## Installation and Usage

TODO

## Features and Functionality

-   Recruiters can make a request to access the information they want to see by adding it to a cart.
-   The owner of the CV will approve or reject the request, and if approved, the recruiter will receive a token valid for 48 hours to access the requested information.
-   Otherwise, the information will be blurred, like a skeleton CV.
-   Recruiters can click on the sections they want to read and add them to the cart before sending their request.
-   Recruiters must connect with an OTP to send a request.
-   There will also be a contact form if the recruiter wants to contact the owner of the CV without adding any information to the cart.
-   The recruiter can download a PDF version of the CV containing only the information they requested and that the owner authorized, if they are authentified by OTP.
-   It will also be possible to do a mini-tutorial to discover the owner's last name without session validation.

## Examples and Screenshots

TODO

## Contributing

Your contributions to this project are greatly appreciated. Before you submit a contribution, please follow these guidelines to ensure a smooth collaboration:

### Branch Naming Convention

- **Frontend Features:** When working on frontend features, please create a branch with the following format: `frontend/feature-name`.

- **Backend Features:** When working on backend features, please create a branch with the following format: `backend/feature-name`.

- **Fullstack Features:** When working on fullstack features, please create a branch with the following format: `fullstack/feature-name`.

- **Modules Features:** When working on other modules features, please create a branch with the following format: `module-name/feature-name`.

For the rest, use common sense: `doc/feature-name` for documentation, `ci/feature-name` for CI, etc..

### Code Quality and Testing

- Ensure that the project's CI/CD pipeline is green before submitting a pull request. This includes passing tests, adhering to linting standards, and meeting coverage requirements.

### Pull Request Guidelines

1. Create a pull request with a clear and descriptive title, use [this PR Template](.github/PULL_REQUEST_TEMPLATE.md)
2. In the pull request description, provide a detailed explanation of your changes and their purpose.
3. Mention any issues or features related to the pull request.
4. Ensure your code is well-documented and follows coding standards.
5. If your pull request introduces new modules, follow this rule for branch names: `module-name/feature-name`.

### Getting Started

1. Fork the repository and create your branch from the `main` branch.
2. Clone your forked repository to your local machine.
3. Make your changes and ensure they pass tests and linting.
4. Push your changes to your fork on GitHub.
5. Create a pull request to the `main` branch of the original repository.

Your contributions are valuable in advancing this project. Thank you for your interest and support in making it better.

## License

This project is licensed under the GPLv3 license. See the LICENSE file for details.

## Acknowledgments

-   None yet
