const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const data = new FormData();
data.append('operations', '{"query":"mutation CreateDocumentMutation($document: DocumentInput!, $signers: [SignerInput!]!, $file: Upload!) {createDocument(document: $document, signers: $signers, file: $file) {id name refusable sortable created_at signatures { public_id name email created_at action { name } link { short_link } user { id name email }}}}", "variables":{"document": {"name": "Contrato de teste"},"signers": [{"email": "prof.vivianearagon@gmail.com","action": "SIGN"}],"file":null}}');
data.append('map', '{"file": ["variables.file"]}');
data.append('file', fs.createReadStream('trabIntegraCrm.pdf'));
const config = {
  method: 'post',
  url: 'https://api.autentique.com.br/v2/graphql',
  headers: {
    'Authorization': 'Bearer 4a916518391a16159a4c8e8b6458aabb7adbb8fd335d917a012d1a1067340d72',
    ...data.getHeaders()
  },
  data : data
};
axios(config)
  .then(function(response) { console.log(JSON.stringify(response.data)); })
  .catch(function(error) { console.log(error); });