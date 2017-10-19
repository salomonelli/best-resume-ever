/* eslint-disable */
import { Selector, ClientFunction } from 'testcafe';

fixture `Resumes Overview`
  .page `http://localhost:8080/#/`;


test('Resumes overview appears', async t => {
    await t.expect(Selector('h3').innerText).eql('best-resume-ever');
});

test('There is at least one resume preview', async t => {
    await t.expect(Selector('.previews .preview').count).gt(1);
});

test('All resumes have a name', async t => {
    const count = await Selector('.previews .preview').count;
    for (var i = 0; i < count; i++)
      await t.expect(Selector('.previews .preview .preview-wrapper span').nth(i).innerText).ok();
});

test('Resume should have link to preview', async t => {
  const count = await Selector('.previews .preview').count;
  for (var i = 0; i < count; i++)  {
      const resumeName = await Selector('.previews .preview .preview-wrapper span').nth(i).innerText;
      const attr = Selector('.previews .preview a').nth(i).getAttribute('href');
      await t.expect(attr).eql('#/resume/' + resumeName);
  }
});
