<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'milos90_godex_novi' );

/** Database username */
define( 'DB_USER', 'milos90_godex_novi' );

/** Database password */
define( 'DB_PASSWORD', 'G0d3x.rs' );

/** Database hostname */
define( 'DB_HOST', '169.254.0.2' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '!,OPOTrg`;*Uw%P1oEupD^435iCE<,vG2_blc.q1u$|fNx(7^ChE_yS*z(lB&Yc@' );
define( 'SECURE_AUTH_KEY',  '19U<VPi_1F,QL<8 `v1C:u8Sq[p$Ngnt#0]wo.^#=!CH`~sT-O>^VA4!L:_P)d6]' );
define( 'LOGGED_IN_KEY',    '&@v+NPm}vtQ(}vkF[9B|Td(?`=b;u_ttv=WpmE<Z/q*%|[mK1#f+wSTni<0jqFqX' );
define( 'NONCE_KEY',        '}Fk]igI1i5-Sov=M2vd%kWZmur`yUmwX8>:Ta7]=AHo?njH(Z_D1{4]fA!G`]*h$' );
define( 'AUTH_SALT',        'Nj|xTIqeYncvo0/]YbI};HKb0bJqV_01tp^b,-aUM_:70AttipYLG4lD4nc4p=Cc' );
define( 'SECURE_AUTH_SALT', '(,a^|>aZAcag8}Hk|p(4V5l}4Xk@kWV{@,!D3KG2O5U4s/B@l7-h[g.c*]SofMS)' );
define( 'LOGGED_IN_SALT',   '5uWIr^QhFOj|B=O$e~qRrT^QrCR5j4Lq-+Dg?Cv[yo=+(8rqC[oCQd%ayemD+O83' );
define( 'NONCE_SALT',       'lm=]HXwHh,T;Y%j%+c5<)]i*Aj+8+{mrO,Hnm@^B9|`#ECSgPzz.AXpmv4;+{K<v' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
