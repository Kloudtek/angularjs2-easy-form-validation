rm -f *.tgz
rm -rf lib
npm run build
npm pack
cd ../idvkey/lite
rm -rf node_modules/angularjs2-easy-form-validation
npm install ../../easy-form-validation/angularjs2-easy-form-validation-0.9.0.tgz
