# yiwen.date
yiwen.date is a personal site under the domain yiwen.date

## How to run
`make run` runs the prod service.  
`make devsite` runs a dev site on port 5000.  
`make webpack` runs a webpack watcher that will rebuild your js when your files change.  
`make venv` and `make js` will install the python virtualenv and the js environment, respectively.

## How to set up
SSL certing files need to be in `/etc/keys/yiwen_dot_date/ssl/yiwen.date.(key/crt)`.  
Must also provide a gmail app password in `/etc/api_keys/gmail/gmail_app_pw.yaml`.  
yiwen.date must also point to the server's IP (obviously). If not, the certificates will fail to validate.
