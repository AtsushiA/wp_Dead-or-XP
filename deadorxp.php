<?php
/**
 * @package Dead or XP
 * @version 0.0.1
 */
/*
Plugin Name: Dead or XP
Plugin URI: http://www.next-season.net/
Description: This is a plugin for displaying an alert notification to WindowsXP Users.
Author: Atsushi Ando
Version: 0.0.1
Plugin URI: http://www.next-season.net/
Text Domain: Dead or XP
*/

/**
* deadorxp.js
* XP ユーザーであれば警告するためのスクリプト
*
* Made by @Stocker_jp http://stocker.jp/
* Public Domain
*/

$DeadorXp = new DeadorXp();

class DeadorXp
{

  const VERSION = '0.0.1';

  function __construct()
  {
    add_action('wp_head', array($this, 'loadJs'));
    add_action('wp', array($this, 'loadCss'));
  }

  public function loadJs()
  {
    wp_register_script('dead-or-xp-js', plugins_url('/js/deadorxp.js', __FILE__), false, self::VERSION);
    wp_enqueue_script('dead-or-xp-js');
  }

  public function loadCss()
  {
    wp_register_style('dead-or-xp-style', plugins_url('css/deadorxp.css', __FILE__), false, self::VERSION);
    wp_enqueue_style('dead-or-xp-style');
  }

}