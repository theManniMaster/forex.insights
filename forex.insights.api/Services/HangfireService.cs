using forex.insights.api.Services.Interfaces;

namespace forex.insights.api.Services
{
    /// <summary>
    /// Implementation of HangfireService.
    /// </summary>
    public class HangfireService() : IHangfireService
    {
        /// <inheritdoc />
        public string GetLoginPage(string endpoint)
        {
            return $@"<!DOCTYPE html>
                <html lang='en'>
                <head>
                    <meta charset='UTF-8'>
                    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                    <title>Login Page</title>
                    <style>
                        /* Global styles */
                        body {{
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                            margin: 0;
                            padding: 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            background: linear-gradient(135deg, #74ebd5, #9face6);
                        }}

                        .login-container {{
                            background-color: white;
                            padding: 40px;
                            border-radius: 12px;
                            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                            width: 100%;
                            max-width: 360px;
                            text-align: center;
                        }}

                        .login-container h2 {{
                            margin-bottom: 25px;
                            font-size: 30px;
                            color: #333;
                        }}

                        .login-container input {{
                            width: 100%;
                            padding: 12px 15px;
                            margin: 10px 0;
                            border-radius: 8px;
                            border: 1px solid #ddd;
                            box-sizing: border-box;
                            font-size: 16px;
                            transition: border-color 0.3s;
                        }}

                        .login-container input:focus {{
                            border-color: #4CAF50;
                            outline: none;
                        }}

                        .login-container button {{
                            width: 100%;
                            padding: 12px 15px;
                            background-color: #4CAF50;
                            color: white;
                            border: none;
                            border-radius: 8px;
                            font-size: 16px;
                            cursor: pointer;
                            transition: background-color 0.3s;
                        }}

                        .login-container button:hover {{
                            background-color: #45a049;
                        }}

                    </style>
                </head>
                    <body>
                        <div class='login-container'>
                            <h2>Hangfire Login</h2>
                            <form id='loginForm'>
                                <input type='text' id='email' name='email' placeholder='Email' required><br>
                                <input type='password' id='password' name='password' placeholder='Password' required><br>
                                <button type='submit'>Login</button>
                            </form>
                        </div>

                        <script>
                            const loginForm = document.getElementById('loginForm');
    
                            loginForm.addEventListener('submit', async (event) => {{
                                event.preventDefault();
    
                                const email = document.getElementById('email').value;
                                const password = document.getElementById('password').value;
    
                                try {{
                                    const response = await fetch('{endpoint}', {{
                                        method: 'POST',
                                        headers: {{
                                            'Content-Type': 'application/json'
                                        }},
                                        body: JSON.stringify({{ email, password }})
                                    }});
    
                                    if (response.ok) {{
                                        window.location.href = '/hangfire';
                                    }} else {{
                                        const errorData = await response.json();
                                        console.error('Login failed:', errorData);
                                    }}
                                }} catch (error) {{
                                    console.error('Error during login request:', error);
                                }}
                            }});
                        </script>
                    </body>
                </html>
                ";
        }
    }
}
