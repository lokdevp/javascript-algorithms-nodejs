#convert from es6 to es5 imports | not perfect, have to do some manually
for file in $(find ./src -name '*.js' ! -name '*.test.js');
   do
      if grep 'export default class .* extends' $file; then
         echo $(grep 'export default'  $file | sed -E 's/export default class (.*) extends (.*)\s+\{/module.exports = \1;/g') >> $file
         sed -i -E 's/export default //g' $file
      elif grep 'export default class' $file; then 
         echo $(grep 'export default'  $file | sed  -E 's/export default class(\s+\S+\s+)\{/module.exports = \1;/g') >> $file
         sed -i -E 's/export default //g' $file
      elif grep 'export default function' $file; then 
         echo $(grep 'export default'  $file | sed -E 's/export default function (.*)\(.*\)\s+\{/module.exports = \1;/g') >> $file
         sed -i -E 's/export default //g' $file
      elif grep 'export default \S*;' $file; then
         sed -i -E 's/export default (.*);/module.exports = \1;/g' $file
      fi
      sed -i -E 's/import(\s+\S+\s+)from\s+(\S+);/const\1= require(\2);/' $file
   done