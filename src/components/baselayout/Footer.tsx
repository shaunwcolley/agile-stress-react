import * as React from 'react';

const Footer: React.FC = () => {

  const unique = (s: any) => {
    let tally: any = {}
    for (let char in s) {
      if(tally[s[char]]) {
        return false
      }
      tally[s[char]] = 1
      console.log(tally)
    }
    return true
  }

  return (
    <div>
      Footer
    </div>
  )
}

export default Footer;
