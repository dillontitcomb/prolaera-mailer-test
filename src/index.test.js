import engine from '@prolaera/prolaeraemailtemplates';
import compliance from './json/compliance.json';
import course from './json/course';
import writeFile from './writeFileHelper';

const imageUrl = 'https://prolaera.s3-us-west-2.amazonaws.com/sponsors/def4c2bf-0485-4eda-9b2b-0e4055ef0dbe.logo.png';

describe('Mailer tests', async () => {
  it('creates userCompliance template', async () => {
    const template = 'userCompliance';
    const body = { template, compliance, imageUrl };
    const event = { body };
    const html = await engine(event);
    const saved = await writeFile(html);
    expect(saved).toEqual(true);
  });
  it('creates courseApproved template', async () => {
    const template = 'courseApproved';
    const body = { template, course, imageUrl };
    const event = { body };
    const html = await engine(event);
    const saved = await writeFile(html);
    expect(saved).toEqual(true);
  });
});
