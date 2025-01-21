Feature: Login functionality

  @InicionValido
  Scenario Outline: El usuario inicia sesión con credenciales válidas
    Given Estoy en la página de inicio de sesión
    When I enter "<username>" and "<password>"
    Then Debería ser redirigido a la página de productos
  Examples:
      | username        | password     |
      | standard_user   | secret_sauce |
      | another_user    | another_pass |

  @InicionInvalido
  Scenario Outline: El usuario no puede iniciar sesión con credenciales inválidas
    Given Estoy en la página de inicio de sesión
    When I enter "<username>" and "<password>"
    Then Debería ver un mensaje de error
      Examples:
      | username        | password     |
      | standard_user   | secret_sauce |
      | another_user    | another_pass |

   
