/**
 * http://www.ietf.org/rfc/rfc2595.txt
 *
 * The mechanism consists of a single message from the client to the
 * server.  The client sends the authorization identity (identity to
 * login as), followed by a US-ASCII NUL character, followed by the
 * authentication identity (identity whose password will be used),
 * followed by a US-ASCII NUL character, followed by the clear-text
 * password.  The client may leave the authorization identity empty to
 * indicate that it is the same as the authentication identity.
 *
 * The server will verify the authentication identity and password with
 * the system authentication database and verify that the authentication
 * credentials permit the client to login as the authorization identity.
 * If both steps succeed, the user is logged in.
 */

// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'Encoder'.
const Encoder = require('../../encoder')

// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'US_ASCII_N... Remove this comment to see the full error message
const US_ASCII_NULL_CHAR = '\u0000'

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = ({
  authorizationIdentity = null,
  username,
  password
}: any) => ({
  encode: async () => {
    return new Encoder().writeBytes(
      [authorizationIdentity, username, password].join(US_ASCII_NULL_CHAR)
    )
  },
})
