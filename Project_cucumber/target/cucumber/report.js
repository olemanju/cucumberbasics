$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "\r\nIn order to perform sucessful login\r\nAs a user\r\nI want to enter correct username and password",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@prodnew"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "In order to verify login to facebook",
  "description": "",
  "id": "login;in-order-to-verify-login-to-facebook",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user entered \"\u003cusername\u003e \" username",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user entered \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user select the age category",
  "rows": [
    {
      "cells": [
        "Age",
        "location"
      ],
      "line": 14
    },
    {
      "cells": [
        "below 18",
        "India"
      ],
      "line": 15
    },
    {
      "cells": [
        "above 18",
        "USA"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user \"\u003cloginType\u003e\" succesfully logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login;in-order-to-verify-login-to-facebook;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "loginType"
      ],
      "line": 20,
      "id": "login;in-order-to-verify-login-to-facebook;;1"
    },
    {
      "cells": [
        "valid",
        "valid",
        "should"
      ],
      "line": 21,
      "id": "login;in-order-to-verify-login-to-facebook;;2"
    },
    {
      "cells": [
        "invalid",
        "invalid",
        "shouldnot"
      ],
      "line": 22,
      "id": "login;in-order-to-verify-login-to-facebook;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 827734,
  "status": "passed"
});
formatter.before({
  "duration": 285867,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "In order to verify login to facebook",
  "description": "",
  "id": "login;in-order-to-verify-login-to-facebook;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@prodnew"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user entered \"valid \" username",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user entered \"valid\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user select the age category",
  "rows": [
    {
      "cells": [
        "Age",
        "location"
      ],
      "line": 14
    },
    {
      "cells": [
        "below 18",
        "India"
      ],
      "line": 15
    },
    {
      "cells": [
        "above 18",
        "USA"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user \"should\" succesfully logged in",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_facebook_website()"
});
formatter.result({
  "duration": 85393140,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 837547,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid ",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_username(String)"
});
formatter.result({
  "duration": 5241605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_password(String)"
});
formatter.result({
  "duration": 96853,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_select_the_age_category(DataTable)"
});
formatter.result({
  "duration": 1193814,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "should",
      "offset": 6
    }
  ],
  "location": "LoginStep.user_shouldbe_succesfully_logged_in(String)"
});
formatter.result({
  "duration": 1650775,
  "status": "passed"
});
formatter.after({
  "duration": 336641,
  "status": "passed"
});
formatter.after({
  "duration": 63574,
  "status": "passed"
});
formatter.before({
  "duration": 75520,
  "status": "passed"
});
formatter.before({
  "duration": 336640,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "In order to verify login to facebook",
  "description": "",
  "id": "login;in-order-to-verify-login-to-facebook;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@prodnew"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user entered \"invalid \" username",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user entered \"invalid\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user select the age category",
  "rows": [
    {
      "cells": [
        "Age",
        "location"
      ],
      "line": 14
    },
    {
      "cells": [
        "below 18",
        "India"
      ],
      "line": 15
    },
    {
      "cells": [
        "above 18",
        "USA"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user \"shouldnot\" succesfully logged in",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_facebook_website()"
});
formatter.result({
  "duration": 71680,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 170240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid ",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_username(String)"
});
formatter.result({
  "duration": 139093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_password(String)"
});
formatter.result({
  "duration": 113494,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_select_the_age_category(DataTable)"
});
formatter.result({
  "duration": 203946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shouldnot",
      "offset": 6
    }
  ],
  "location": "LoginStep.user_shouldbe_succesfully_logged_in(String)"
});
formatter.result({
  "duration": 666881,
  "status": "passed"
});
formatter.after({
  "duration": 155734,
  "status": "passed"
});
formatter.after({
  "duration": 205227,
  "status": "passed"
});
formatter.uri("logintoprod.feature");
formatter.feature({
  "line": 2,
  "name": "Login to Production",
  "description": "\r\nIn order to perform sucessful login to Production\r\nAs a user\r\nI want to enter correct username and password",
  "id": "login-to-production",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@bvt"
    },
    {
      "line": 1,
      "name": "@prod"
    }
  ]
});
formatter.before({
  "duration": 221441,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_facebook_website()"
});
formatter.result({
  "duration": 74667,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 61867,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "In order to verify login to facebook production",
  "description": "",
  "id": "login-to-production;in-order-to-verify-login-to-facebook-production",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "user entered \"valid\" username",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user entered \"valid\" password",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user validates the captcha image",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user \"shouldbe\" succesfully logged in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_username(String)"
});
formatter.result({
  "duration": 142080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_password(String)"
});
formatter.result({
  "duration": 109227,
  "status": "passed"
});
formatter.match({
  "location": "LoginProdStep.user_validates_the_captcha_image()"
});
formatter.result({
  "duration": 162987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shouldbe",
      "offset": 6
    }
  ],
  "location": "LoginStep.user_shouldbe_succesfully_logged_in(String)"
});
formatter.result({
  "duration": 98560,
  "status": "passed"
});
formatter.after({
  "duration": 61866,
  "status": "passed"
});
formatter.before({
  "duration": 62720,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_facebook_website()"
});
formatter.result({
  "duration": 58454,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 52053,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "In order to verify login to facebook production",
  "description": "",
  "id": "login-to-production;in-order-to-verify-login-to-facebook-production",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "user entered \"invalid\" username",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user entered \"invalid\" password",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user validates the captcha image",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user \"shouldnot\" succesfully logged in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_username(String)"
});
formatter.result({
  "duration": 99840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_password(String)"
});
formatter.result({
  "duration": 95147,
  "status": "passed"
});
formatter.match({
  "location": "LoginProdStep.user_validates_the_captcha_image()"
});
formatter.result({
  "duration": 74667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shouldnot",
      "offset": 6
    }
  ],
  "location": "LoginStep.user_shouldbe_succesfully_logged_in(String)"
});
formatter.result({
  "duration": 126294,
  "status": "passed"
});
formatter.after({
  "duration": 64426,
  "status": "passed"
});
});