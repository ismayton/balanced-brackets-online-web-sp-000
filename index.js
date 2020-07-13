function isBalanced(string)
{
  if(string === '')
  {
    return true
  }
  else if(string[0] === '}' || string[0] === ']' || string[0] === ')')
  {
    return false
  }
  else if(isOdd(string.length))
  {
    return false
  }
  else if(edgeCase(string))
  {
    return true
  }
  else
  {
    console.log('current string')
    console.log(string)
    
    let inside = insideBrackets(string)
    console.log('testing inside')
    console.log(inside)
    
    if(isBalanced(inside))
    {
      console.log('inside balanced')
      
      let next = removeBalancedBrackets(string)
      console.log('testing next')
      console.log(next)
      
      if(isBalanced(next))
      {
        console.log('next balanced')
        return true
      }
      else
      {
        console.log('FALSE next unbalanced')
        return false
      }
    }
    else
    {
      console.log('FALSE inside unbalanced')
      return false
    }
  }
  console.log('made it through!')
  return true
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