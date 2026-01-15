# Important note
This original react-bootsrap package from npm https://www.npmjs.com/package/react-bootstrap , https://github.com/react-bootstrap/react-bootstrap . Changes done:
1. src/ModelDialog.js 49 line edited. Deleted harcoded "modal-content" div. Modal structure now this:
```
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div className="modal-content">
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              I will not close if you click outside me. Don't even try to press
              escape key.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary">Understood</Button>
            </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

render(<Example />);

```
This change is done, that div "modal-content" be customizable and can be wrapped by another elements.


# React-Bootstrap

> [Bootstrap 4][bootstrap] components built with [React][react].

[![GitHub Actions CI status][gh-actions-badge]][gh-actions]
[![Travis CI Build status][travis-badge]][travis]
[![npm][npm-badge]][npm]
[![Codecov][codecov-badge]][codecov]
[![Discord][discord-badge]][discord]
[![Netlify][netlify-badge]][netlify]

## Docs

See the [documentation][documentation] with live editable examples and API documention.

To find the documentation for the latest Bootstrap 3 compatible release, [go here](https://react-bootstrap-v3.netlify.com).

### Migrating from Bootstrap 3 to Bootstrap 4

If you would like to update React-Bootstrap within an existing project to use Bootstrap 4, please read our docs for **[migrating to React-Bootstrap V1](https://react-bootstrap.github.io/migrating/)**.

## Related modules

- [react-router-bootstrap][react-router-bootstrap] – Integration with [React Router][react-router]
- [Awesome React Bootstrap Components][awesome-react-bootstrap-components] - Additional components like off-canvas navbar, switch and sliders.

## Local setup

Yarn is our package manager of choice here. Check out setup
instructions [here](https://yarnpkg.com/en/docs/install) if you don't have it installed already.
After that you can run `yarn run bootstrap` to install all the needed dependencies.

From there you can:

- Run the tests once with `yarn test` (Or run them in watch mode with `yarn run tdd`).
- Start a local copy of the docs site with `yarn start`
- Or build a local copy of the library with `yarn run build`

## CodeSandbox Examples

[Click here](https://github.com/react-bootstrap/code-sandbox-examples) to explore some React-Bootstrap [CodeSandbox](https://codesandbox.io/) examples.

[Click here](https://codesandbox.io/s/github/react-bootstrap/code-sandbox-examples/tree/master/basic) to automatically open [CodeSandbox](https://codesandbox.io/) with the React-Bootstrap [CodeSandbox Examples GitHub Repository](https://github.com/react-bootstrap/code-sandbox-examples) as a workspace.

## Contributions

Yes please! See the [contributing guidelines][contributing] for details.

[bootstrap]: https://getbootstrap.com/
[react]: https://reactjs.org/
[documentation]: https://react-bootstrap.github.io/
[contributing]: CONTRIBUTING.md
[travis-badge]: https://travis-ci.org/react-bootstrap/react-bootstrap.svg?branch=master
[travis]: https://travis-ci.org/react-bootstrap/react-bootstrap
[npm-badge]: https://badge.fury.io/js/react-bootstrap.svg
[npm]: http://badge.fury.io/js/react-bootstrap
[react-router-bootstrap]: https://github.com/react-bootstrap/react-router-bootstrap
[react-router]: https://github.com/reactjs/react-router
[react-bootstrap-extended]: https://github.com/rbalicki2/react-bootstrap-extended
[awesome-react-bootstrap-components]: https://github.com/Hermanya/awesome-react-bootstrap-components
[codecov-badge]: https://img.shields.io/codecov/c/github/react-bootstrap/react-bootstrap/master.svg
[codecov]: https://codecov.io/gh/react-bootstrap/react-bootstrap
[discord-badge]: https://img.shields.io/badge/Discord-Join%20chat%20%E2%86%92-738bd7.svg
[discord]: https://discord.gg/0ZcbPKXt5bXLs9XK
[netlify-badge]: https://api.netlify.com/api/v1/badges/91501718-8820-4d69-b7fe-1616eff5914e/deploy-status
[netlify]: https://app.netlify.com/sites/react-bootstrap/deploys
[gh-actions-badge]: https://github.com/react-bootstrap/react-bootstrap/workflows/CI/badge.svg
[gh-actions]: https://github.com/react-bootstrap/react-bootstrap/actions
