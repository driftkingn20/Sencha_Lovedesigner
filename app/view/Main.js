Ext.define('Gooruism.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
		'Ext.carousel.Carousel'
    ],
    config: {
        tabBarPosition: 'bottom',
		
        items: [

            {
            title : 'Features',
            iconCls : 'home',
            xtype:'panel',            
            layout:'vbox',
            defaults:{
                flex:1
            },
            items:[{
				
                xtype : 'carousel',
                direction:'horizontal',
                items:[
					/*{
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Lovedesigner'
                    },*/
                    {
                        xtype : 'panel',
						html: [
							"<img src='http://www.lovedesigner.net/wp-content/uploads/2013/05/Gangster-Squad-wallpapers-15.jpg' class='feature'/>",
							"เรื่องราวของเหล่า Gangster แนวใหม่กับการล้มอำนาจเจ้าพ่อ",
						].join("")
                    },
                    {
                        xtype : 'panel',
						html: [
							'<img src="http://www.lovedesigner.net/wp-content/uploads/2013/05/apocalypse_now-mud4.jpg" class="feature"/>'
						].join("")
                    },
					{
                        xtype : 'panel',
						html: [
							'<img src="http://www.lovedesigner.net/wp-content/images/stories/AshesOfTime/Screen%20Shot%202556-05-07%20at%2012.16.11%20AM.png" class="feature"/>'
						].join("")
                    },
					{
                        xtype : 'panel',
						html: [
							'<img src="http://www.lovedesigner.net/wp-content/images/stories/sp_rp/62theater06.jpg" class="feature"/>'
						].join("")
                    }
                ]
            },{
                xtype: 'nestedlist',
                    title: 'Top Stories',
					iconCls: 'settings',
                    cls: 'home',
                    displayField: 'title',

                    store: {
                        type: 'tree',

                        fields: ['title', 'link', 'author', 'contentSnippet', 'content', {
                            name: 'leaf',
                            defaultValue: true
                        }],

                        root: {
                            leaf: false
                        },

                        proxy: {
                            type: 'jsonp',
                            url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=5&q=http://www.lovedesigner.net/feed/',
                            reader: {
                                type: 'json',
                                rootProperty: 'responseData.feed.entries'
                            }
                        }
                    },

                    detailCard: {
                        xtype: 'panel',
                        scrollable: true,
                        styleHtmlContent: true
                    },

                    listeners: {
                        itemtap: function(nestedList, list, index, element, post) {
                            this.getDetailCard().setHtml(post.get('content'));
                        }
                    },
					getItemTextTpl: function(node) {
						return '<div class="homes">{title}</div>';
					}
            }
            ]
        },
            {
                    xtype: 'nestedlist',
                    title: 'Reviews',
					iconCls: 'settings',
                    cls: 'blog',
                    displayField: 'title',

                    store: {
                        type: 'tree',

                        fields: ['title', 'link', 'author', 'contentSnippet', 'content', {
                            name: 'leaf',
                            defaultValue: true
                        }],

                        root: {
                            leaf: false
                        },

                        proxy: {
                            type: 'jsonp',
                            url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&q=http://www.lovedesigner.net/feed/',
                            reader: {
                                type: 'json',
                                rootProperty: 'responseData.feed.entries'
                            }
                        }
                    },

                    detailCard: {
                        xtype: 'panel',
                        scrollable: true,
                        styleHtmlContent: true
                    },

                    listeners: {
                        itemtap: function(nestedList, list, index, element, post) {
                            this.getDetailCard().setHtml(post.get('content'));
                        }
                    },
					getItemTextTpl: function(node) {
						return '<div class="layer">{title}</div>';
					}
            },
			{
						title: 'About Us',
						iconCls: 'team',
                        xtype : 'panel',
						html: [
						    '<div align="center"><h1>About Us</h1></div>',
							'<img src="images/about.jpg" style="width:100%; height:100%;"/>',
							'<p>Mobile Content จากเว็บไซต์ http://www.lovedesigner.net รวมบทความกรท่องเที่ยวรีวิว และไลฟ์สไตล์ ติดต่อส่งบทความรีวิวได้ที่ Email:daydevthailand@gmail.com</p>'
						].join("")
            }
        ]
    }
});
