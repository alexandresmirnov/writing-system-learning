RealKana = function () {

	var _answerE,
		_cookie,
		_inputE,
		_kanas,
		_page,
		_prior_guess,
		_question,
		_questionE,
		_question_idx = -1,
		_rightE,
		_shownE,
		_typeface_idx = -1,
		_typefaces,
		_xE,


		_ALTS = {
			し:'_si_',
			ち:'_ti_',
			つ:'_tu_',
			ふ:'_hu_',
			を:'_wo_',
			じ:'_zi_',
			ぢ:'_di_',
			づ:'_du_',
			シ:'_si_',
			チ:'_ti_',
			ツ:'_tu_',
			フ:'_hu_',
			ヲ:'_wo_',
			ジ:'_zi_',
			ヂ:'_di_',
			ヅ:'_du_',
			しゃ:'_sya_',
			しゅ:'_syu_',
			しょ:'_syo_',
			ちゃ:'_tya_',
			ちゅ:'_tyu_',
			ちょ:'_tyo_',
			じゃ:'_zya_jya_',
			じゅ:'_zyu_jyu_',
			じょ:'_zyo_jyo_',
			ぢゃ:'_zya_dya_',
			ぢゅ:'_zyu_dyu_',
			ぢょ:'_zyo_dyo_',
			シャ:'_sya_',
			シュ:'_syu_',
			ショ:'_syo_',
			チャ:'_tya_',
			チュ:'_tyu_',
			チョ:'_tyo_',
			ジャ:'_zya_jya_',
			ジュ:'_zyu_jyu_',
			ジョ:'_zyo_jyo_',
			ヂャ:'_zya_dya_',
			ヂュ:'_zyu_dyu_',
			ヂョ:'_zyo_dyo_'
			},


		_CHARS = {
			あ:[0,0],い:[1,0],う:[2,0],え:[3,0],お:[4,0],か:[5,0],が:[6,0],き:[7,0],ぎ:[8,0],く:[9,0],
			ぐ:[0,1],け:[1,1],げ:[2,1],こ:[3,1],ご:[4,1],さ:[5,1],ざ:[6,1],し:[7,1],じ:[8,1],す:[9,1],
			ず:[0,2],せ:[1,2],ぜ:[2,2],そ:[3,2],ぞ:[4,2],た:[5,2],だ:[6,2],ち:[7,2],ぢ:[8,2],つ:[9,2],
			づ:[0,3],て:[1,3],で:[2,3],と:[3,3],ど:[4,3],な:[5,3],に:[6,3],ぬ:[7,3],ね:[8,3],の:[9,3],
			は:[0,4],ば:[1,4],ぱ:[2,4],ひ:[3,4],び:[4,4],ぴ:[5,4],ふ:[6,4],ぶ:[7,4],ぷ:[8,4],へ:[9,4],
			べ:[0,5],ぺ:[1,5],ほ:[2,5],ぼ:[3,5],ぽ:[4,5],ま:[5,5],み:[6,5],む:[7,5],め:[8,5],も:[9,5],
			ゃ:[0,6],や:[1,6],ゅ:[2,6],ゆ:[3,6],ょ:[4,6],よ:[5,6],ら:[6,6],り:[7,6],る:[8,6],れ:[9,6],
			ろ:[0,7],わ:[1,7],を:[2,7],ん:[3,7],ァ:[4,7],ア:[5,7],ィ:[6,7],イ:[7,7],ゥ:[8,7],ウ:[9,7],
			ェ:[0,8],エ:[1,8],ォ:[2,8],オ:[3,8],カ:[4,8],ガ:[5,8],キ:[6,8],ギ:[7,8],ク:[8,8],グ:[9,8],
			ケ:[0,9],ゲ:[1,9],コ:[2,9],ゴ:[3,9],サ:[4,9],ザ:[5,9],シ:[6,9],ジ:[7,9],ス:[8,9],ズ:[9,9],
			セ:[0,10],ゼ:[1,10],ソ:[2,10],ゾ:[3,10],タ:[4,10],ダ:[5,10],チ:[6,10],ヂ:[7,10],ツ:[8,10],ヅ:[9,10],
			テ:[0,11],デ:[1,11],ト:[2,11],ド:[3,11],ナ:[4,11],ニ:[5,11],ヌ:[6,11],ネ:[7,11],ノ:[8,11],ハ:[9,11],
			バ:[0,12],パ:[1,12],ヒ:[2,12],ビ:[3,12],ピ:[4,12],フ:[5,12],ブ:[6,12],プ:[7,12],ヘ:[8,12],ベ:[9,12],
			ペ:[0,13],ホ:[1,13],ボ:[2,13],ポ:[3,13],マ:[4,13],ミ:[5,13],ム:[6,13],メ:[7,13],モ:[8,13],ャ:[9,13],
			ヤ:[0,14],ュ:[1,14],ユ:[2,14],ョ:[3,14],ヨ:[4,14],ラ:[5,14],リ:[6,14],ル:[7,14],レ:[8,14],ロ:[9,14],
			ワ:[0,15],ヲ:[1,15],ン:[2,15],ヴ:[3,15]
			},

		_COLUMNS = [
			[['בּ','b'],['ד','d'],['ג','g'],['ף','f'],['פ','f'],['ה','h'],['ח','x'],['י','j'],['ק','k'],['כּ','k'],['ל','l'],['ם','m'],['מ','m'],['פּ','p'],['נ','n'],['ן','n'],['ר','r'],['ס','s'],['שׂ','s'],['שׁ','sh'],['ט','t'],['ת','t'],['ץ','ts'],['צ','ts'],['ב','v'],['ו','v'],['ח','x'],['ך','x'],['כ','x'],['ז','z'],['א','\''],['ע','\'']]
			],

		_KANA = {
			h: { columns: 16, offset: 0 },
			hd: { columns: 12, offset: 16 },
			k: { columns: 16, offset: 28 },
			kd: { columns: 12, offset: 44 },
			ke: { columns: 14, offset: 56 }
			};


	function __change_background() {
		var _background = $( '#b td' ).index( $( this ).parent() ) + 1;

		$( '#all' )
			.removeClass( 'b-1 b-2 b-3 b-4 b-5 b-6 b-7 b-8 b-9' )
			.addClass( 'b-' + _background );

		_cookie = _cookie.replace( /b\d/, ( 'b' + _background ) );

		__write_cookie();

		ga( 'send', 'event', 'interaction', 'select', 'background', _background );
		}


	function __change_preview() {
		var _preview = $( '#preview td' ).index( $( this ).parent() ) + 1;

		_cookie = _cookie.replace( /p\d/, ( 'p' + _preview ) );

		__write_cookie();

		__render_kana();
		}


	function __check( _event ) {
		if ( ( _event.which == 13 ) || (_event.which == 32 ) ) {
			_event.preventDefault();

			if ( _answerE.is( ':visible' ) ) {
				__question();
				}
			else if ( ( _inputE.val().toLowerCase() == _answerE.text() ) || ( _ALTS[ _question[ 0 ] ] && _ALTS[ _question[ 0 ] ].match( '_' + _inputE.val().toLowerCase() + '_' ) ) ) {
				if ( ! _prior_guess ) {
					_rightE.text( _rightE.text() - 0 + 1 );
					}

				$( '#top p' ).css( 'visibility', 'hidden' );

				__question();
				}
			else {
				if ( _inputE.val().toLowerCase() == _prior_guess ) {
					_xE.hide();
					_answerE.show();
					}
				else {
					_prior_guess = _inputE.val().toLowerCase();

					_xE.show();
					}
				}
			}
		else if ( _event.which == 27 ) {
			__show_answer();
			}
		}


	function __init_intro_page() {
		if ( _page == 'i' ) {
			$( '#bitcoin a' ).mouseover( function () {
				$( '#bitcoin div.more' ).slideDown();
				} );

			$( '#bitcoin a' ).click( function () {
				$( '#bitcoin div.more' ).slideUp();
				} );
			}
		}


	function __init_kana_page() {
		var _i, _pow, _regexp, _value;

		if ( $( 'body' ).hasClass( 'kana' ) ) {
			__render_kana();

			_regexp = new RegExp( _page + '(\\d+)' );

			_cookie.match( _regexp );

			_value = RegExp.$1;

			_i = _KANA[ _page ].columns;

			while ( _i ) {
				if ( _value >= ( _pow = Math.pow( 2, --_i ) ) ) {
					_value -= _pow;
					$( ':checkbox' ).eq( _i ).prop( 'checked', true );
					}
				}

			$( '#kana td' ).click( function () { $( ':checkbox' ).eq( $( this ).siblings().andSelf().index( $( this ) ) ).click(); } );

			$( ':checkbox' ).click( __set );

			$( '#preview td > span' ).click( __change_preview );

			$( 'ul#check span' ).click( function () { $( ':checkbox' ).prop( 'checked', $( this ).parent().is( ':first-child' ) ); __set(); } );
			}
		}


	function __init_options_page() {
		var _i, _pow, _value;

		if ( _page == 'o' ) {
			$( '#b span' ).click( __change_background );

			_cookie.match( /t(\d+)/ );

			_value = RegExp.$1;

			_i = 9;

			while ( _i ) {
				if ( _value >= ( _pow = Math.pow( 2, --_i ) ) ) {
					_value -= _pow;
					$( ':checkbox' ).eq( _i ).prop( 'checked', true );
					}
				}

			$( '#t span' ).click( function () { $( ':checkbox' ).eq( $( '#t td' ).index( $( this ).parent() ) ).click(); } );

			$( ':checkbox' ).click( __set );
			}
		}


	function __init_practice_page() {
		var _char, _columns, _glyph, _i, _j, _kana, _pow, _value;

		if ( _page == 'p' ) {
			$( document ).keydown( __check );

			if ( _cookie.search( /h0hd0k0kd0ke0/ ) != -1 ) {
				_cookie = _cookie.replace( /h0/, 'h1' );
				}

			if ( _cookie.search( /t0/ ) != -1 ) {
				_cookie = _cookie.replace( /t0/, 't1' );
				}

			__write_cookie();

			_answerE = $( '#answer' );
			_inputE = $( 'input' );
			_questionE = $( '#question' );
			_rightE = $( '#right' );
			_shownE = $( '#shown' );
			_xE = $( '#x' );

			_questionE.on( 'mouseover', 'span', __show_answer );

			_kanas = _typefaces = [ ];

			_columns = _cookie.match( /(h\d+)(hd\d+)(k\d+)(kd\d+)(ke\d+)/ );

			_columns.shift();

			for ( _i = 0; _i < 5; _i++ ) {
				_kana = _columns[ _i ].match( /([dehk]+)(\d+)/ );
				_kana.shift();
				_kana[ 1 ] -= 0;

				if ( _kana[ 1 ] ) {
					_j = _KANA[ _kana[ 0 ] ].columns;

					while ( _j ) {
						if ( _kana[ 1 ] >= ( _pow = Math.pow( 2, --_j ) ) ) {
							_kana[ 1 ] -= _pow;
							_kanas = _kanas.concat( _COLUMNS[ _j + _KANA[ _kana[ 0 ] ].offset ] );
							}
						}
					}
				}

			_cookie.match( /t(\d+)/ );

			_value = RegExp.$1;

			_i = 9;

			while ( _i ) {
				if ( _value >= ( _pow = Math.pow( 2, --_i ) ) ) {
					_value -= _pow;
					_typefaces.push( _i + 1 );
					}
				}

			__question();
			}
		}


	function __question() {
		var _attempt, _typeface;

		_shownE.text( _shownE.text() - 0 + 1 );

		if ( _shownE.text() == '1' ) $( '#score' ).show();

		_prior_guess = '';

		_questionE.empty();

		_inputE
			.attr( 'name', 'g-' + Math.floor( Math.random() * 1000000000 ) )
			.val( '' )
			.focus();

		_answerE.hide();
		_xE.hide();

		do {
			_attempt = Math.floor( Math.random() * _kanas.length );

			if ( _kanas.length == 1 ) { break; }
			} while ( _attempt == _question_idx );

		_question_idx = _attempt;
		_question = _kanas[ _question_idx ];

		_attempt = -1;

		do {
			_attempt = Math.floor( Math.random() * _typefaces.length );

			if ( _typefaces.length == 1 ) { break; }
			} while ( _attempt == _typeface_idx );

		_typeface_idx = _attempt;
		_typeface = _typefaces[ _typeface_idx ] - 1;
		
		genericSpan = $('<span>');
		questionSpan = _questionE.append(genericSpan);
		
		for ( _i = 0; _i < _question[ 0 ].length; _i++ ) {
			_char = _question[ 0 ].charAt( _i );
			console.log(_question);
			console.log(_i);
			
			//_glyph = $( '<span>' ).css( 'background-position', ( '-' + ( ( _CHARS[ _char ][ 0 ] * 50 ) + ( _typeface * 500 ) ) + 'px -' + ( _CHARS[ _char ][ 1 ] * 50 ) + 'px' ) );
			_glyph = _char;
			console.log(_glyph);
			$('#question span').append( _glyph );
			}

		_answerE.text( _question[ 1 ] );

	//	ga( 'send', 'event', 'interaction', 'show', 'question' );
		}


	function __render_kana() {
		var _offset, _preview;

		_cookie.match( /p(\d)/ );

		_preview = RegExp.$1 - 1;

		$( '#kana span' ).each( function () {
			_offset = _CHARS[ $( this ).text() ];

			$( this ).css( 'background-position', ( '-' + ( ( _offset[ 0 ] * 19 ) + ( _preview * 190 ) ) + 'px -' + ( _offset[ 1 ] * 19 ) + 'px' ) );
			} );
		}


	function __set( _e ) {
		var _i, _key, _regexp, _value;

		if ( _e ) {
			_e.stopPropagation();
			}

		_i = _value = 0;

		$( ':checkbox' ).each( function () {
			if ( $( this ).prop( 'checked' ) ) {
				_value += Math.pow( 2, _i );
				}
            _i++;
            } );

		_key = ( ( _page == 'o' ) ? 't' : _page );

		_regexp = new RegExp( _key + '\\d+' );

		_cookie = _cookie.replace( _regexp, _key + _value );

		__write_cookie();
		}


	function __show_answer() {
		_xE.hide();
		_answerE.show();
		}


	function __write_cookie() {
		document.cookie = ( 'a=' + _cookie + '; path=/; domain=realkana.com' );
		}


	return {

		init: function () {
			_page = $( 'body' ).attr( 'id' );

			if ( document.cookie.search( /a=(b\dh(\d+)hd(\d+)k(\d+)kd(\d+)ke(\d+)p\dt\d+)/ ) != -1 ) {
				_cookie = RegExp.$1;
				}
			else {
				_cookie = 'b1h1hd0k0kd0ke0p1t1';
				}

			$( '<img>' )[ 0 ].src = '/img/sprites.png';
			$( '<img>' )[ 0 ].src = '/img/k/19/kana.png';
			$( '<img>' )[ 0 ].src = '/img/k/50/kana.png';

			__init_intro_page();

			__init_kana_page();

			__init_options_page();

			__init_practice_page();
			}

		};

}();


$( RealKana.init );