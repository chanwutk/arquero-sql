import tape from 'tape';
import {base, base3, pprint} from './common';

tape('SqlQuery: join', t => {
  const join1 = base.join(base3, 'a');
  pprint(join1);

  t.end();
});