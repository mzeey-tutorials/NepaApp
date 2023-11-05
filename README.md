# NepaApp Project

## Overview

NepaApp is a web application designed to provide users with a convenient and efficient platform for managing their electricity consumption, payments, and related information. This README serves as an introduction to the project, providing an overview of its purpose, features, and how to get started.

## Features

- **User View:**
  - Dashboard: Provides users with an overview of their electricity bill, meter status, live meter price rates, overall bill paid for the year, meter units left, electricity bill report, and the ability to purchase meter units.
  - Analytics: Allows users to view the flow of cash and electricity units over the years, monthly and yearly usage reports, and the option to download reports.
  - Payments: Enables users to manage payments, access payment history, and download payment reports.
  - Profile: Offers users the capability to update profile information, link social media accounts with their account, and update their password.
  - Registration: Provides an account setup process, allowing users to register with user details or through social media platforms.
  - Login: Allows users to log in with credentials or through social media.
  - Account Recovery: Supports password recovery for forgotten passwords.

- **Admin View:**
  - Dashboard: Provides admins with an overview of generated monthly revenue and active monthly status.
  - Manage Meters: Allows admins to manage meters, view meters based on locations (states), and access payment history of meters.
  - Pricing: Enables admins to manage prices of meter units, update meter unit prices, and add new pricing ranges.
  - Manage Admins: Provides tools for admins to view other admins, register new admins with specific rules/rights, and delete admins.
  - Profile: Allows admin users to update their profile details.

## Branching Strategy

NepaApp follows a structured branching strategy to manage code development and releases effectively. We have the following branches:

- **Development Branch:** The `development` branch is where active development takes place. This is where new features, bug fixes, and hotfixes are initially developed.

- **Main Branch:** The `main` branch represents the current working release of the application. This branch is the most stable and reliable version of the project.

- **Staging Branch:** The `staging` branch is used for User Acceptance Testing (UAT). It represents the version of the application available for testing and validation before it's released to the main branch.

### Feature, Bug, and Hotfix Branches

In addition to the main branches, we create feature, bug, and hotfix branches for code development and issue resolution:

- **Feature Branches:** These branches are created from the `development` branch and are used for the development of new features or enhancements. Feature branches are merged back into the `development` branch once the feature is complete.

- **Bug Branches:** Bug branches are created from the `development` branch and are dedicated to addressing specific issues or bugs. Once the bug is fixed, the changes are merged back into the `development` branch.

- **Hotfix Branches:** Hotfix branches are created from the `main` branch and are used for addressing critical issues or bugs in the live version of the application. Once the hotfix is tested and validated, it's merged into both the `development` and `main` branches.

## Contact
If you have any questions or need further information, please raise an issue with the label of `help`
