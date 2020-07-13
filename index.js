function isBalanced(string)
{
  if(string === '')
  {
    return true
  }
  else if(isOdd(string.length))
  {
    return false
  }
  else
  {
    let inside = insideBrackets(string)
    console.log('inside')
    console.log(inside)
    if(isBalanced(inside))
    {
      let next = removeBalancedBrackets(string)
      console.log('next')
      console.log(next)
      if(isBalanced(next))
      {
        return true
      }
      else
      {
        return false
      }
    }
    else
    {
      return false
    }
  }
}


function removeBalancedBrackets(string)
{
  if(string[0] == '{')
  {
    for(let j = 0; j < string.length; j++)
    {
      if(string[j] == '}')
      {
        console.log('found and removed {}')
        return string.substring(j + 1)
      }
    }
  }
  else if(string[0] == '(')
  {
    for(let j = 0; j < string.length; j++)
    {
      if(string[j] == ')')
      {
        console.log('found and removed ()')
        return string.substring(j + 1)
      }
    }
  }
  
  else if(string[0] == '[')
  {
    for(let j = 0; j < string.length; j++)
    {
      if(string[j] == ']')
      {
        console.log('found and removed []')
        return string.substring(j + 1)
      }
    }
  }
}


function insideBrackets(string)
{
  if(string[0] === string[1])
  {
    console.log('double open found')
    let edgeCase = string.slice(1)
    console.log('redo inside with new string')
    console.log(edgeCase)
    return insideBrackets(edgeCase)
  }
  if(string[0] == '{')
  {
    for(let j = 0; j < string.length; j++)
    {
      if(string[j] == '}')
      {
        return string.slice(1, j)
      }
    }
  }
  
  else if(string[0] == '(')
  {
    for(let j = 0; j < string.length; j++)
    {
      if(string[j] == ')')
      {
        return string.slice(1, j)
      }
    }
  }
  
  else if(string[0] == '[')
  {
    for(let j = 0; j < string.length; j++)
    {
      if(string[j] == ']')
      {
        return string.slice(1, j)
      }
    }
  }
}

function isOdd(length)
{
  if(length % 2 === 0)
  {
    return false
  }
  else
  {
    return true
  }
}

function partnerTest(string)
{
  if(string[0] == '{')
  {
    for(let j = 0; j < string.length; j++)
    {
      if(string[j] == '}')
      {
        return true
      }
    }
  }
  
  else if(string[0] == '(')
  {
    for(let j = 0; j < string.length; j++)
    {
      if(string[j] == ')')
      {
        return true
      }
    }
  }
  
  else if(string[0] == '[')
  {
    for(let j = 0; j < string.length; j++)
    {
      if(string[j] == ']')
      {
        return true
      }
    }
  }
  else if (string === '')
  {
    return true
  }
}

function edgeCase(string)
{
  if((string[0] === '(' || string[0] === '{' || string[0] === '[') && string[0] === string[1])
  {
    return true
  }
  else
  {
    return false
  }
}