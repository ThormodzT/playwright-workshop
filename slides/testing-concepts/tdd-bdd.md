# 🧪 TDD vs BDD: The Ultimate Showdown of Testing Methodologies

In the world of software development, two methodologies often go head-to-head: **Test-Driven Development (TDD)** and **Behavior-Driven Development (BDD)**. Both approaches aim to improve software quality, but they take **different routes** to get there. Let’s break them down! 🎉

---

## 🔎 What is TDD?

**Test-Driven Development (TDD)** is like writing a recipe _before_ cooking a dish. 🍕  
You first define what the dish (code) should look like, then cook (develop), and finally, tweak the flavors (refactor).

TDD follows the famous **Red-Green-Refactor** cycle:

1. **🔴 Red:** Write a test for a feature that doesn’t exist yet. Of course, it fails.
2. **🟢 Green:** Write just enough code to make the test pass.
3. **♻️ Refactor:** Clean up the code while keeping tests passing.

### ✨ Benefits of TDD:

- **Less debugging drama:** Fixing bugs early is cheaper and easier. 💰
- **Confidence boost:** Code refactoring is fearless because tests have your back. 🦸‍♂️
- **Better design:** Forces you to write modular, loosely coupled code.

### 🔥 TDD in action (Example):

Let's say you need to create a function to sum two numbers. In TDD:

1. **Step 1:** Write the test first.

```python
def test_sum():
assert sum(2, 3) == 5
```

2. **Step 2:** Write the minimal code to pass.

```python
def sum(a, b):
return a + b
```

3. **Step 3:** Refactor (if needed).

```python
# No need to refactor, simple function!
```

---

## 🧠 What is BDD?

**Behavior-Driven Development (BDD)** is like writing a script _before_ shooting a movie. 🎬  
It focuses on **what** the system should do from a user’s perspective rather than **how** it does it.

### BDD is all about collaboration:

- 🗣️ Encourages communication between developers, testers, and business folks.
- 📝 Uses simple, plain-English scenarios (thanks to Gherkin syntax).
- 🔄 Aligns everyone on the **expected behavior** of the application.

### 🧩 Core BDD Concepts:

1. **Scenarios:** Describe how features should behave in real-world situations.
2. **Given-When-Then:** We already discussed this, **is The golden** rule of BDD.

**Example Scenario (Login feature):**

```gherkin
Feature: User Login

Scenario: Successful login
Given the user is on the login page
When they enter valid credentials
Then they should be redirected to the dashboard
```

# 📝 Understanding Gherkin: The Language of BDD

Gherkin is a **domain-specific language** that enables business stakeholders, developers, and testers to collaborate on defining application behavior using **plain, easy-to-read text.** It serves as the backbone of **Behavior-Driven Development (BDD)** frameworks like Cucumber, SpecFlow, and Behave.

---

## ✨ Why Use Gherkin?

- **Readable by Everyone:** Even non-technical stakeholders can understand and contribute. 📖
- **Living Documentation:** It acts as executable documentation that evolves with the project. 📂
- **Automation Ready:** Gherkin syntax can be directly linked to automation scripts. 🤖
- **Consistency:** Provides a standardized format to describe behaviors.

---

## 🧩 Gherkin Syntax Overview

Gherkin uses simple keywords to structure test scenarios:

| Keyword            | Purpose                                      | Example                                  |
| ------------------ | -------------------------------------------- | ---------------------------------------- |
| `Feature`          | Describes what functionality is being tested | `Feature: User Login`                    |
| `Scenario`         | Defines a specific test case                 | `Scenario: Login with valid credentials` |
| `Given`            | Establishes initial conditions               | `Given the user is on the login page`    |
| `When`             | Describes the action taken                   | `When they enter their credentials`      |
| `Then`             | Describes the expected result                | `Then they should be redirected`         |
| `And`/`But`        | Adds more steps to the scenario              | `And the user sees a welcome message`    |
| `Background`       | Provides common preconditions for scenarios  | `Background: User is on homepage`        |
| `Scenario Outline` | Template for multiple test cases             | `Scenario Outline: Login attempt`        |
| `Examples`         | Data-driven test values                      | `Examples: email, password`              |

---

## 📖 Gherkin Example: E-Commerce Checkout Flow

```gherkin
Feature: E-Commerce Checkout Process

  Background:
    Given the user is logged into their account

  Scenario: Successful checkout
    Given the user has items in the cart
    When they proceed to checkout
    And they enter valid payment details
    Then the order should be confirmed
    And they should receive an email confirmation

  Scenario Outline: Checkout with invalid payment details
    Given the user has items in the cart
    When they attempt to pay with "<payment_method>"
    Then they should see an error message "<error_message>"

    Examples:
      | payment_method | error_message                 |
      | expired card   | Payment declined              |
      | empty fields   | Please fill in all details    |
      | invalid card   | Card details incorrect        |
```

---

## 🚀 Combining TDD and BDD: Best of Both Worlds?

Why choose one when you can have both? 🤯

- Use **TDD** to build well-structured, reliable code at a unit level.
- Use **BDD** to ensure the entire system meets the user's needs.
- Together, they create a **powerful feedback loop** for continuous quality.

**Example Workflow:**

1. Write high-level BDD scenarios (business-focused).
2. Convert them into smaller TDD-based unit tests (technical).
3. Develop the features step by step with continuous testing.

---

## 🚀 Practical Example: Combining TDD and BDD

Let's walk through a detailed example where we apply TDD and BDD together to develop a user login system.

### Step 1: Define Behavior Using Gherkin (BDD First Approach)

```gherkin
Feature: User Authentication
  Scenario: Successful login
    Given the user navigates to the login page
    When they enter a valid email and password
    Then they should be redirected to the dashboard

  Scenario: Unsuccessful login with wrong credentials
    Given the user navigates to the login page
    When they enter an incorrect email or password
    Then they should see an error message "Invalid credentials"

  Scenario: Password reset functionality
    Given the user is on the login page
    When they click on "Forgot Password"
    Then they should be taken to the password recovery page
```

### Step 2: Convert Scenarios into TDD Tests

```python
import pytest
from authentication import login_user

def test_successful_login():
    # Arrange
    email = "user@example.com"
    password = "securepassword"

    # Act
    result = login_user(email, password)

    # Assert
    assert result == "Dashboard loaded"

def test_invalid_login():
    # Arrange
    email = "wrong@example.com"
    password = "wrongpassword"

    # Act
    result = login_user(email, password)

    # Assert
    assert result == "Invalid credentials"

def test_password_reset():
    # Act
    result = reset_password("user@example.com")

    # Assert
    assert result == "Password reset link sent"
```

### Step 3: Implement the Code to Pass the Tests

```python
# authentication.py
valid_users = {
    "user@example.com": "securepassword"
}

def login_user(email, password):
    if email in valid_users and valid_users[email] == password:
        return "Dashboard loaded"
    return "Invalid credentials"

def reset_password(email):
    if email in valid_users:
        return "Password reset link sent"
    return "Email not found"
```

### Step 4: Run Tests and Refactor

1. 🔴 Initially, tests will fail.
2. 🟢 Implement the logic until all tests pass.
3. ♻️ Finally, refactor the code to improve maintainability without breaking tests.

### Step 5: Automate with CI/CD (CI/CD? What's that? D:)
Once tests are passing, integrate them into your CI/CD (We will see this in the next slide, prepare yourself) pipeline to ensure that:

1. Every push triggers automated tests. ✅
2. Failures block deployments. 🚫
3. Reports are generated for better visibility. 📊

```yaml
# example in github actions
name: Run Authentication Tests

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.9'
      - name: Install dependencies
        run: pip install -r requirements.txt
      - name: Run tests
        run: pytest
```
---

## 🎯 Final Thoughts

TDD and BDD aren’t enemies—they’re just different tools in your **testing arsenal.** 🛠️
Want strong, reliable code? Use **TDD.**
Want a clear, collaborative process? Use **BDD.**
Want the ultimate quality? **Use them together.** 🚀

Remember, the goal of both methodologies is the same:

> **"Deliver awesome software that works as expected!"** 💯
