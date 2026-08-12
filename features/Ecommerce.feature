
Feature: Ecommerce Validation

  Scenario: Placing Order

    Given Login to Ecommerce application using "Das1@gmail.com" and "Qwerty@@123"
    When add "ZARA COAT 3" to cart
    Then Verify "ZARA COAT 3" is added in the cart
    When enter payment details "ind" and  "India" and place the Order and verify using "Das1@gmail.com"
    Then verify order is placed and its visible in the order history page


  Scenario Outline: Error Validation
    Given Login to Ecommerce2 application using "<username>" and "<password>"
    Then Verify the error msg is displayed

    Examples:
      | username       | password   |
      | ram@gmail.com  | abcdes@123 |
      | sonu@gmail.com | qwerty@123 |



/*
az role assignment create `
  --assignee "$(az ad sp list --display-name 'Ram-Github_Playwright' --query '[0].appid' -o tsv)" `
  --role "Storage Blob Data Contributor" `
  --scope "$(az storage account show --name pwstrgrambcd4 --resource-group ram --query id -o tsv)"


az ad sp create-for-rbac `
  --name "Ram-Github_Playwright" `
  --role "Contributor" `
  --scopes "/subscriptions/889e5336-bc5a-40b6-95c6-95644324b281/resourceGroups/RAM" `
  --json-auth
*/
