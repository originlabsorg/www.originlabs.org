;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    142: function(e, a, t) {
      'use strict'
      t.r(a),
        t.d(a, 'graphql', function() {
          return f
        }),
        t.d(a, 'StaticQueryContext', function() {
          return p
        }),
        t.d(a, 'StaticQuery', function() {
          return h
        })
      var n = t(0),
        l = t.n(n),
        r = t(4),
        s = t.n(r),
        c = t(141),
        i = t.n(c)
      t.d(a, 'Link', function() {
        return i.a
      }),
        t.d(a, 'withPrefix', function() {
          return c.withPrefix
        }),
        t.d(a, 'navigate', function() {
          return c.navigate
        }),
        t.d(a, 'push', function() {
          return c.push
        }),
        t.d(a, 'replace', function() {
          return c.replace
        }),
        t.d(a, 'navigateTo', function() {
          return c.navigateTo
        })
      var o = t(36)
      t.d(a, 'waitForRouteChange', function() {
        return o.c
      })
      var u = t(146),
        m = t.n(u)
      t.d(a, 'PageRenderer', function() {
        return m.a
      })
      var d = t(50)
      t.d(a, 'parsePath', function() {
        return d.a
      })
      var p = l.a.createContext({}),
        h = function(e) {
          return l.a.createElement(p.Consumer, null, function(a) {
            return e.data || (a[e.query] && a[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : a[e.query].data)
              : l.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function f() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.',
        )
      }
      h.propTypes = {
        data: s.a.object,
        query: s.a.string.isRequired,
        render: s.a.func,
        children: s.a.func,
      }
    },
    144: function(e, a, t) {
      'use strict'
      var n = t(0),
        l = t.n(n)
      a.a = function() {
        return l.a.createElement(
          'footer',
          { id: 'footer' },
          l.a.createElement(
            'div',
            { className: 'inner' },
            l.a.createElement(
              'ul',
              { className: 'icons' },
              l.a.createElement(
                'li',
                null,
                l.a.createElement(
                  'a',
                  {
                    href: 'https://www.twitter.com/originlabsorg',
                    className: 'icon alt fa-twitter',
                  },
                  l.a.createElement('span', { className: 'label' }, 'Twitter'),
                ),
              ),
              l.a.createElement(
                'li',
                null,
                l.a.createElement(
                  'a',
                  {
                    href: 'https://www.github.com/originlabsorg',
                    className: 'icon alt fa-github',
                  },
                  l.a.createElement('span', { className: 'label' }, 'GitHub'),
                ),
              ),
              l.a.createElement(
                'li',
                null,
                l.a.createElement(
                  'a',
                  {
                    href: 'https://www.linkedin.com/in/originlabsorg',
                    className: 'icon alt fa-linkedin',
                  },
                  l.a.createElement('span', { className: 'label' }, 'LinkedIn'),
                ),
              ),
            ),
            l.a.createElement(
              'ul',
              { className: 'copyright' },
              l.a.createElement(
                'li',
                null,
                '© ',
                'Origin Labs ' + new Date().getFullYear(),
              ),
            ),
          ),
        )
      }
    },
    145: function(e, a, t) {
      'use strict'
      var n = t(0),
        l = t.n(n),
        r = t(4),
        s = t.n(r),
        c = t(142),
        i = function(e) {
          return l.a.createElement(
            'header',
            { id: 'header', className: 'alt' },
            l.a.createElement(
              c.Link,
              { to: '/', className: 'logo' },
              l.a.createElement('strong', null, 'Origin'),
              l.a.createElement('span', null, 'Labs'),
              l.a.createElement('span', { className: 'icon fa-flask' }),
            ),
            l.a.createElement(
              'nav',
              null,
              l.a.createElement(
                'a',
                {
                  className: 'menu-link',
                  onClick: e.onToggleMenu,
                  href: 'javascript:;',
                },
                'Menu',
              ),
            ),
          )
        }
      ;(i.propTypes = { onToggleMenu: s.a.func }), (a.a = i)
    },
    146: function(e, a, t) {
      var n
      e.exports = ((n = t(157)) && n.default) || n
    },
    147: function(e, a, t) {
      'use strict'
      var n = t(0),
        l = t.n(n),
        r = t(4),
        s = t.n(r),
        c = t(142),
        i = function(e) {
          return l.a.createElement(
            'nav',
            { id: 'menu' },
            l.a.createElement(
              'div',
              { className: 'inner' },
              l.a.createElement(
                'ul',
                { className: 'links' },
                l.a.createElement(
                  'li',
                  null,
                  l.a.createElement(
                    c.Link,
                    { onClick: e.onToggleMenu, to: '/' },
                    'Home',
                  ),
                ),
              ),
              l.a.createElement(
                'ul',
                { className: 'actions vertical' },
                l.a.createElement(
                  'li',
                  null,
                  l.a.createElement(
                    'a',
                    {
                      href: '#contact',
                      onClick: e.onToggleMenu,
                      className: 'button fit',
                    },
                    'Get in Touch',
                  ),
                ),
              ),
            ),
            l.a.createElement(
              'a',
              {
                className: 'close',
                onClick: e.onToggleMenu,
                href: 'javascript:;',
              },
              'Close',
            ),
          )
        }
      ;(i.propTypes = { onToggleMenu: s.a.func }), (a.a = i)
    },
    148: function(e, a, t) {},
    150: function(e, a, t) {
      'use strict'
      var n = t(0),
        l = t.n(n),
        r = (t(152), t(8)),
        s = t.n(r),
        c = t(153),
        i = t.n(c),
        o = '6Lc2dXkUAAAAAL6hepoPO4BYkTI_uRzQ8xR92kvy',
        u =
          'DAdCdBYBho/WcGWzC+VfJA1oYwmyYftgKCsW9S1m/SdepmSaSdtGZoj6SeZBB9N3XVioWQlPd5N/FyE8YbFn/oIDFnc+J+2myK8IHP7yivuaEfUR1fgApAlf4TROE90mlQ1zOrFLiTuFq2zIDF9dZlVtNQzreBI8yA37utIb54geXAvqukoehFSTNDjZis0NEgLCaKCxtB9E56uDCVHX8G6ODU/dftdoGxryHOojj9rfHWAFoJ3tslNhCkUixQLt41bJRVfKAXWu2v6FNI1bl1F2McetNUwrd9QTFY7qjJwadzVbO18jQ5MAjvRJvko3RN3SxOPpHJ9RAquj32n7StyzBCQRkmO/l+SkYOjySO85Qob9DIfjuK2sxxoUNFOkpTIu5mlDwirh7anD2IsucuYuLMpzzhjzOlqU4/jbMSQhx7YmFI5nZo1MuqNfrKJxVvz95Jo5ctWuFhR7hUfXFmlwvPJ8+4VJvnhpauspfz1Q2kgZPFDQDzww47rsUtKWJx7RRyBFvDqqgxw5jPJRMX8MnfoENrHKz13VY5SzuIstNmw6q91j/pprOt6FZQqyqNxqbXVt/bYJP/PU5yN3lsvhzz0V9ic3hQ40ccpmkZO3O2uPA/PBfey7DrLhp2YHE+KcXridOzmxwHolN8U4xcahbCw4Fogt54B4od9Qbts=',
        m = function(e) {
          var a = e.callback
          return l.a.createElement(i.a, {
            className: 'g-recaptcha',
            sitekey: o,
            theme: 'dark',
            verifyCallback: a,
          })
        },
        d = t(154),
        p = t.n(d),
        h = function(e, a, t) {
          p.a.ajax({
            type: 'POST',
            url:
              'https://staticman3.herokuapp.com/v2/entry/originlabsorg/originlabs.org/master',
            data: e,
            contentType: 'application/x-www-form-urlencoded',
            success: function(e) {
              return a(e)
            },
            error: function(e) {
              return t(e)
            },
          })
        },
        f = (function(e) {
          function a() {
            for (
              var a, t = arguments.length, n = new Array(t), l = 0;
              l < t;
              l++
            )
              n[l] = arguments[l]
            return (
              ((a = e.call.apply(e, [this].concat(n)) || this).state = {
                name: '',
                email: '',
                message: '',
                reCaptchaCheck: !1,
                sendingButtonMessage: 'Send Message',
                submissionResponse: '',
              }),
              (a.handleFieldChange = function(e) {
                var t,
                  n = e.target,
                  l = n.value,
                  r = n.getAttribute('id')
                a.setState((((t = {})[r] = l), t))
              }),
              (a.onSuccess = function() {
                a.setState({
                  submissionResponse:
                    'The contact form was successfully submitted!',
                  sendingButtonMessage: 'Message sent!',
                }),
                  a.resetForm()
              }),
              (a.onError = function() {
                a.setState({
                  submissionResponse:
                    'There was an error with the submission, please try again later!',
                })
              }),
              (a.resetForm = function() {
                return a.setState({ name: '', email: '', message: '' })
              }),
              (a.clearSubmissionResponse = function() {
                return a.setState({ submissionResponse: '' })
              }),
              (a.handleFormSubmit = function(e) {
                e.preventDefault()
                var t = a.state
                t.name, t.email, t.message
                a.setState({ sendingButtonMessage: 'Sending...' })
                var n = p()(e.target).serialize()
                console.log('Form Data:', n), h(n, a.onSuccess, a.onError)
              }),
              (a.checkCaptcha = function(e) {
                a.setState({ reCaptchaCheck: e.length && !0 })
              }),
              a
            )
          }
          return (
            s()(a, e),
            (a.prototype.render = function() {
              var e = this.state,
                a = e.name,
                t = e.email,
                n = e.message,
                r = e.reCaptchaCheck,
                s = e.sendingButtonMessage,
                c = e.submissionResponse
              return l.a.createElement(
                'section',
                null,
                l.a.createElement(
                  'form',
                  {
                    method: 'post',
                    onSubmit: this.handleFormSubmit,
                    onChange: this.clearSubmissionResponse,
                  },
                  l.a.createElement('input', {
                    name: 'options[slug]',
                    type: 'hidden',
                    value: '',
                  }),
                  l.a.createElement('input', {
                    type: 'hidden',
                    name: 'options[reCaptcha][siteKey]',
                    value: o,
                  }),
                  l.a.createElement('input', {
                    type: 'hidden',
                    name: 'options[reCaptcha][secret]',
                    value: u,
                  }),
                  l.a.createElement(
                    'div',
                    { className: 'field half first' },
                    l.a.createElement('label', { htmlFor: 'name' }, 'Name'),
                    l.a.createElement('input', {
                      type: 'text',
                      name: 'fields[name]',
                      id: 'name',
                      value: a,
                      onChange: this.handleFieldChange,
                      pattern: "[A-Za-z\\-'\\s]+",
                      required: !0,
                    }),
                  ),
                  l.a.createElement(
                    'div',
                    { className: 'field half' },
                    l.a.createElement('label', { htmlFor: 'email' }, 'Email'),
                    l.a.createElement('input', {
                      type: 'email',
                      name: 'fields[email]',
                      id: 'email',
                      value: t,
                      onChange: this.handleFieldChange,
                      required: !0,
                    }),
                  ),
                  l.a.createElement(
                    'div',
                    { className: 'field' },
                    l.a.createElement(
                      'label',
                      { htmlFor: 'message' },
                      'Message',
                    ),
                    l.a.createElement('textarea', {
                      name: 'fields[message]',
                      id: 'message',
                      rows: '6',
                      value: n,
                      onChange: this.handleFieldChange,
                      required: !0,
                    }),
                  ),
                  l.a.createElement(
                    'div',
                    { className: 'field' },
                    c && l.a.createElement('p', null, c),
                  ),
                  l.a.createElement(m, { callback: this.checkCaptcha }),
                  l.a.createElement(
                    'ul',
                    { className: 'actions' },
                    l.a.createElement(
                      'li',
                      null,
                      l.a.createElement('input', {
                        type: 'submit',
                        value: s,
                        className: 'special',
                        disabled: !r,
                      }),
                    ),
                    l.a.createElement(
                      'li',
                      null,
                      l.a.createElement('input', {
                        type: 'reset',
                        value: 'Clear',
                      }),
                    ),
                  ),
                ),
              )
            }),
            a
          )
        })(n.Component)
      a.a = function() {
        return l.a.createElement(
          'section',
          { id: 'contact' },
          l.a.createElement(
            'div',
            { className: 'inner' },
            l.a.createElement(f, null),
            l.a.createElement(
              'section',
              { className: 'split' },
              l.a.createElement(
                'section',
                null,
                l.a.createElement(
                  'div',
                  { className: 'contact-method' },
                  l.a.createElement('span', {
                    className: 'icon alt fa-envelope',
                  }),
                  l.a.createElement('h3', null, 'Email'),
                  l.a.createElement(
                    'a',
                    { href: '#' },
                    'contact@originlabs.org',
                  ),
                ),
              ),
              l.a.createElement(
                'section',
                null,
                l.a.createElement(
                  'div',
                  { className: 'contact-method' },
                  l.a.createElement('span', { className: 'icon alt fa-phone' }),
                  l.a.createElement('h3', null, 'Phone'),
                  l.a.createElement('span', null, '(415) 506-7160'),
                ),
              ),
              l.a.createElement(
                'section',
                null,
                l.a.createElement(
                  'div',
                  { className: 'contact-method' },
                  l.a.createElement('span', { className: 'icon alt fa-home' }),
                  l.a.createElement('h3', null, 'Address'),
                  l.a.createElement(
                    'span',
                    null,
                    '1 Market Plaza SP6',
                    l.a.createElement('br', null),
                    'San Francisco, CA 94105',
                    l.a.createElement('br', null),
                    'United States of America',
                  ),
                ),
              ),
            ),
          ),
        )
      }
    },
    157: function(e, a, t) {
      'use strict'
      t.r(a)
      t(38)
      var n = t(0),
        l = t.n(n),
        r = t(4),
        s = t.n(r),
        c = t(73),
        i = t(1),
        o = function(e) {
          var a = e.location,
            t = i.default.getResourcesForPathnameSync(a.pathname)
          return l.a.createElement(
            c.a,
            Object.assign({ location: a, pageResources: t }, t.json),
          )
        }
      ;(o.propTypes = {
        location: s.a.shape({ pathname: s.a.string.isRequired }).isRequired,
      }),
        (a.default = o)
    },
  },
])
//# sourceMappingURL=1-023d79535d94d7945cc4.js.map
