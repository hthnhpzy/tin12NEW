function login()
{
  let u = username.value
  let p = password.value
  if (u=="vy" && p=="123")
  {
    window.open("login.html")
    document.getElementById(compiler).style.display="block"
  }
}
