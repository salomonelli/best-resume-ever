/* eslint-disable */
import { Selector, ClientFunction } from 'testcafe';

fixture `Resumes`
  .page `http://localhost:8080/#/`;

let resumes;

async function getResumeNames() {
  if(resumes) return resumes;
  resumes = [];
  const count = await Selector('.previews .preview').count;
  for (var i = 0; i < count; i++) {
    const resumeName = await Selector('.previews .preview .preview-wrapper span').nth(i).innerText;
    resumes.push(resumeName);
  }
  return resumes;
}

test('Click on resume should open preview', async t => {
  const r = await getResumeNames();
  await t.expect(r.length).gt(0);
  for(const resume of r) {
    const s = '.page#' + resume;
    await t
    .navigateTo('http://localhost:8080/#/resume/' + resume)
    .expect(Selector(s)).ok()
    .expect(Selector(s + ' *').withText('John Doe')).ok();
  }
});
