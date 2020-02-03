sails-hook-validatorjs
====
Sails.js hook to use validatorjs

## Installation
```
$ npm install sails-hook-validatorjs
```

## Usage
On the request action
```javascript
module.exports = async function requestAction (req, res) {

  const validation = req.validator({prm1: 'required|integer'})
  
  validation.passes() // true
  validation.fails() // false
  validation.errors.first('prm1')

  return res.view('requestAction', rtns.toObject());

}

## Licence

[MIT](http://opensource.org/licenses/mit-license.php)

## Author

[nmrmsys](https://github.com/nmrmsys)