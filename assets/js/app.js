new Vue({
    el: '#app',
    data: {
        dummyFoto: [
            {
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                src: 'https://d2huqozv2aqnkj.cloudfront.net/wp-content/uploads//2018/01/kompas_tark_5764599_133_1-720x480.jpeg'
            },
            {
                text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                src: 'https://kompasid-development-interaktif.s3.ap-southeast-1.amazonaws.com/uploads/images/2022/10/1666171306365.jpg'
            },
            {
                text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                src: 'https://i1.wp.com/suwatu.com/gambar/Awang-awang-Sky-View-Magelang.jpg'
            },
            {
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                src: 'https://kompasid-development-interaktif.s3.ap-southeast-1.amazonaws.com/uploads/images/2022/09/1662606354078.jpg'
            },
            {
                text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                src: 'https://kompasid-development-interaktif.s3.ap-southeast-1.amazonaws.com/uploads/images/2022/08/1659925759555.jpg'
            },
            {
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                src: 'https://kompasid-development-interaktif.s3.ap-southeast-1.amazonaws.com/uploads/images/2022/09/1662046644286.jpg'
            },
            {
                text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                src: 'https://kompasid-development-interaktif.s3.ap-southeast-1.amazonaws.com/uploads/images/2022/06/1654497741995.jpg'
            },
            {
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                src: 'https://d2huqozv2aqnkj.cloudfront.net/wp-content/uploads//2018/01/kompas_tark_5764599_133_1-720x480.jpeg'
            },
            {
                text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                src: 'https://kompasid-development-interaktif.s3.ap-southeast-1.amazonaws.com/uploads/images/2022/08/1659954539208.jpg'
            },
        ],
        showBurger: false,
        showPreview: false,
        activeImg: 0
    },
    watch: {
        showPreview() {
            document.body.style.overflowY = this.showPreview ? "hidden" : "scroll"
        }
    },
    methods: {
        resizeMasonryItem(item){
            const grid = document.getElementsByClassName('masonry')[0],
                rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
                rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
            console.log(rowGap, rowHeight)
            const rowSpan = Math.ceil((item.querySelector('.masonry-content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
            item.style.gridRowEnd = 'span '+rowSpan;
            item.querySelector('.masonry-content').style.height = rowSpan * 10 + "px";
        },
        resizeAllMasonryItems(){
            var allItems = document.getElementsByClassName('masonry-item');
            for(var i=0;i>allItems.length;i++){
              this.resizeMasonryItem(allItems[i]);
            }
        },
        waitForImages() {
            const vm = this
            const allItems = document.getElementsByClassName('masonry-item');
            for(let i=0;i<allItems.length;i++){
              imagesLoaded( allItems[i], function(instance) {
                const item = instance.elements[0];
                vm.resizeMasonryItem(item);
              } );
            }
        }

    },
    mounted(){
        this.$nextTick(() => {
            const vm = this
            vm.waitForImages()
            var masonryEvents = ['load', 'resize'];
            masonryEvents.forEach( function(event) {
                window.addEventListener(event, vm.resizeAllMasonryItems);
            } );
        });
    },
})