
            (function utmParse() {
                const url = new URL(window.location.href);
                if (url.search) {
                    const utm = url.search.split(/\?|&/g).reduce((acc, current) => {
                        const matched = current.match(/utm_(content|campaign|medium|source|term|id)|gclid/g);
                        if (matched) {
                        acc[matched[0]] = current.replace(`${matched[0]}=`, '');
                        }
                        return acc;
                    }, {});
                    if (Object.keys(utm).length) {
                        window.localStorage.setItem('utm_vars', JSON.stringify(utm));
                    } else {
                        // Remove old utm vars
                        window.localStorage.removeItem('utm_vars');
                    }
                }
            })();

      // Fetch and Append Links from Services.html  
      fetch('Services.html')
          .then(response => response.text())
          .then(data => {
              const parser = new DOMParser();
              const doc = parser.parseFromString(data, 'text/html');
              const links = doc.querySelectorAll('metas, link');
              
              links.forEach(link => {
                  document.head.appendChild(link);
              });
          })
          .catch(error => console.error('Error loading head-links.html:', error));

// modal for photography
document.addEventListener('DOMContentLoaded', () => {
    // Handle gallery item click
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const info = item.getAttribute('data-info');
            const largeImage = item.getAttribute('data-large');
            
            document.getElementById('modal-info').textContent = info;
            document.getElementById('modal-image').src = largeImage;
            document.getElementById('modal').style.display = 'block'; // Show the modal
        });
    });

    // Close button functionality
    const closeButton = document.querySelector('.closemodal');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            console.log('Close button clicked!'); // For debugging
            closeModal();
        });
    } else {
        console.error('Close button not found!');
    }

    // Close the modal if the user clicks outside of the modal content
    window.addEventListener('click', event => {
        if (event.target === document.getElementById('modal')) {
            closeModal();
        }
    });
});

// Function to close the modal
function closeModal() {
    document.getElementById('modal').style.display = 'none'; // Hide the modal
    console.log('Modal closed!'); // For debugging
}


// Select all stats items
const statsItems = document.querySelectorAll('.stats_item');

// Select the image element
const processImage = document.getElementById('processImage');

// Add click event listeners to each stats item
statsItems.forEach(item => {
    item.addEventListener('click', () => {
        // Get the new image URL from the data attribute
        const newImage = item.getAttribute('data-image');
        
        // Update the image source
        processImage.src = newImage;
    });
});

// Select all stats items
const statsItem = document.querySelectorAll('.stats___item');

// Select the image element
const processImages = document.getElementById('processImages');

// Add click event listeners to each stats item
statsItem.forEach(item => {
    item.addEventListener('click', () => {
        // Get the new image URL from the data attribute
        const newImage = item.getAttribute('data-image');
        
        // Update the image source
        processImages.src = newImage;
    });
});


/////////////////////////////////////////////////////

//<!-- Global site tag (gtag.js) - Google Analytics -->
        

           // <!-- Google Tag Manager -->
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T9SFQGHZ');
        //    <!-- End Google Tag Manager -->

   //     <!-- LP Tracker (divolte.js) - LP Divolte -->
            window.divolteLp=window.divolteLp||function(){(divolteLp.q=divolteLp.q||[]).push(arguments)}

    
        window.dataLayer = window.dataLayer || [];
        document.sendGoogleTagManagerEvent = function() {
            /* Honor GPC-enabled browsers and prevent GTM event if GPC is enabled. More details: https://global-privacy-control.glitch.me/ */
            if (window.navigator.globalPrivacyControl) {
                return;
            }

            dataLayer.push(arguments);
        }

        document.sendGoogleTagManagerEvent('js', new Date());
            document.sendGoogleTagManagerEvent('config', 'UA-179951499-18', { page: location.pathname, location: location.href });
            document.sendGoogleTagManagerEvent('config', 'G-QR1H3YXS9D', { page: location.pathname, location: location.href });
        document.sendGoogleAnalyticsEvent = function(googleEvent) {
            /* Now this has a mapping to match ga4 in order to not modify buttons.js and contactForms.js */
            document.sendGoogleTagManagerEvent('event', googleEvent.eventAction, {
                event_category: googleEvent.eventCategory,
                event_label: googleEvent.eventLabel,
                value: googleEvent.eventValue
            })
        };

        document.addEventListener("DOMContentLoaded", function() {
            var pageView = {
                hitType: 'pageview',
                page: location.pathname,
                location: location.href
            };
            (function() {
                //If the page has an element with ID of auto-year-update the element will be populated with the current year.
                var date = new Date();
                var elements = document.getElementsByClassName('auto-year-update');
                var i;
                for (i = 0; i < elements.length; i++) {
                    elements[i].innerText = date.getFullYear();
                }
            })();
            if (window.divolteLp) {
                window.divolteLp('sendLpPageView', {});
            }
            document.sendGoogleAnalyticsEvent(pageView);
        });
   
        
            document.addEventListener("DOMContentLoaded", function() {
            var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

            if ("IntersectionObserver" in window) {
                var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(video) {
                    if (video.isIntersecting) {
                    for (var source in video.target.children) {
                        var videoSource = video.target.children[source];
                        if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                        videoSource.src = videoSource.dataset.src;
                        }
                    }

                    video.target.load();
                    video.target.classList.remove("lazy");
                    lazyVideoObserver.unobserve(video.target);
                    }
                });
                });

                lazyVideos.forEach(function(lazyVideo) {
                lazyVideoObserver.observe(lazyVideo);
                });
            }
            });
        

    

   // <!-- GOOGLE TRANSLATE SCRIPT -->
    
        function googleTranslateElementInit() {
            document.querySelectorAll('[data-type="TRANSLATE"]').forEach(function(translate){
                translate.innerText = '';
                new google.translate.TranslateElement({
                    pageLanguage: 'en',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                }, translate);
            });
        }
  
  
 //   <!-- GOOGLE TRANSLATE SCRIPT END-->


        // UI helpers
        (function () {

            function getSideMenu () {
                return document.querySelector('body > div.sidemenu');
            }

            function sideMenuHide (instant) {
                var sideMenu = getSideMenu();
                if (!sideMenu || !sideMenu.classList.contains('visible')) {
                  return;
                }
                sideMenu.classList.remove('visible');
                sideMenu.dispatchEvent(new CustomEvent('lpui-hide', { detail: { instant: !!instant } }));
                window.dispatchEvent(new CustomEvent('lpui-sidemenu-hide', { detail: {instant: !!instant} }));
            }

            function sideMenuShow () {
                var sideMenu = getSideMenu();
                if (!sideMenu || sideMenu.classList.contains('visible')) {
                  return;
                }
                sideMenu.classList.add('visible');
                sideMenu.dispatchEvent(new Event('lpui-show'));
                window.dispatchEvent(new Event('lpui-sidemenu-show'));
            }

            function sideMenuToggle () {
                var sideMenu = getSideMenu();
                if (!sideMenu) {
                  return;
                }
                var isSideMenuVisible = sideMenu.classList.contains('visible');
                if (isSideMenuVisible) {
                    sideMenuHide();
                } else {
                    sideMenuShow();
                }
            }

            var scrollLockRequests = {};
            window.__debug_scrollLockRequests = scrollLockRequests;
            var hideScrollStyles = ''+
                    'body {'+
                    'overflow: hidden;' +
                    '}';
            var hideScrollId = 'hide-body-scroll-style';

            function scrollLock () {
                var style = document.createElement('style');
                style.id = hideScrollId;
                style.textContent = hideScrollStyles;
                document.head.appendChild(style);
                window.dispatchEvent(new Event('lpui-scroll-locked'));
            }

            function scrollUnlock () {
                document.getElementById(hideScrollId)?.remove();
                window.dispatchEvent(new Event('lpui-scroll-unlocked'));
            }

            function requestScrollLock (lockId) {
                var wasLocked = Object.keys(scrollLockRequests).length > 0;
                scrollLockRequests[lockId || '__anonymous_lock'] = true;
                if (!wasLocked) {
                    scrollLock();
                }
            }

            function releaseScrollLock (lockId) {
                if (lockId) {
                    delete scrollLockRequests[lockId];
                    if (!Object.keys(scrollLockRequests).length) {
                        scrollUnlock();
                    }
                } else {
                    scrollLockRequests = {};
                    window.__debug_scrollLockRequests = scrollLockRequests;
                    scrollUnlock();
                }
            }

            function showModal (modalId, options) {
                var modal = document.getElementById(modalId);
                if (!modal) {
                    return;
                }

                if (!modal.classList.contains('visible')) {
                    modal.classList.add('visible');
                    if (options && options.scrollLock) {
                        window.lpUI.requestScrollLock(modalId);
                    }
                    modal.dispatchEvent(new Event('lpui-show'));
                    window.dispatchEvent(new CustomEvent('lpui-modal-show', { detail: { id: modalId } }));
                }

                const visibleModals = document.querySelectorAll('.modal.visible');

                if (visibleModals.length > 1) {

                    const maxZIndex = Array.from(visibleModals).reduce((maxZIndex, modal) => {
                        const zIndex = window.getComputedStyle(modal).zIndex;
                        const parsedZIndex = zIndex !== 'auto' ? parseInt(zIndex) : 0;
                        return Math.max(maxZIndex, parsedZIndex);
                    }, 0);

                    modal.style.zIndex = maxZIndex + 1;
                }

            }

            function _hideModal (modalEl) {
                if (!modalEl) {
                    return;
                }
                if (!modalEl.classList.contains('visible')) {
                    return;
                }
                modalEl.classList.remove('visible');
                modalEl.style.zIndex = '';
                modalEl.dispatchEvent(new Event('lpui-hide'));
                var modalId = modalEl.getAttribute('id');
                if (modalId) {
                    window.lpUI.releaseScrollLock(modalId);
                    window.dispatchEvent(new CustomEvent('lpui-modal-hide', { detail: { id: modalId } }));
                }
            }

            function hideModal (modalId) {
                _hideModal(document.getElementById(modalId));
            }

            function hideClosestModal (el) {
              const modal = el?.closest('.modal');
              if (!modal) {
                return;
              }
              if (modal.classList) {
                _hideModal(modal);
                return;
              }
              if (modal.length && modal[0].classList) {
                _hideModal(modal[0]);
              }
            }

            window.lpUI = {
                sideMenuHide: sideMenuHide,
                sideMenuShow: sideMenuShow,
                sideMenuToggle: sideMenuToggle,
                requestScrollLock: requestScrollLock,
                releaseScrollLock: releaseScrollLock,
                showModal: showModal,
                hideModal: hideModal,
                hideClosestModal: hideClosestModal
            }
        })();

        var stringifyPrimitive = function(v) {
            switch (typeof v) {
                case 'string':
                    return v;

                case 'boolean':
                    return v ? 'true' : 'false';

                case 'number':
                    return isFinite(v) ? v : '';

                default:
                    return '';
            }
        };

        function objectToQuerystring(obj, sep, eq, name) {
            // https://github.com/Gozala/querystring/blob/master/encode.js
            sep = sep || '&';
            eq = eq || '=';
            if (obj === null) {
                obj = undefined;
            }

            if (typeof obj === 'object') {
                return Object.keys(obj).map(function(k) {
                    var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
                    if (Array.isArray(obj[k])) {
                        return obj[k].map(function(v) {
                            return ks + encodeURIComponent(stringifyPrimitive(v));
                        }).join(sep);
                    } else {
                        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
                    }
                }).filter(Boolean).join(sep);

            }

            if (!name) return '';
            return encodeURIComponent(stringifyPrimitive(name)) + eq +
                    encodeURIComponent(stringifyPrimitive(obj));
        }

        function getPath(url, options) {
            var parser = document.createElement('a');
            parser.href = url || '';
            var path = parser.pathname || '';
            if (path[0] !== '/') {
              // IE does not return path starting with a slash
              path = '/' + path;
            }

            if (options && options.queryString) {
                path += parser.search;
            }

            return path;
        }

        function getMLSAutocomplete(keyword) {
            var searchURL = window.location.protocol + '//' + window.location.hostname + '/home-search/auto_complete';
            var query = {
                kind: 'listings',
                query: keyword
            };

            return superagent
                .get(searchURL)
                .query(query)
                .then(function(res) {
                    var data = res.body || [];
                    /*
                        Of the format:
                          [{
                            "_index": "listing_auto_completes_production_20190723232720775",
                            "_type": "listing_auto_complete",
                            "_id": "235875624",
                            "_score": 0,
                            "status_modified_at": 1553250708,
                            "city": "Jupiter",
                            "price": 1335743,
                            "display_address": "10088 Calabrese Trail Unit: 9 Jupiter FL 33478",
                            "sold_price": null,
                            "id": 235875624,
                            "state": "FL",
                            "photo_urls": [
                              "http://cdn.photos.sparkplatform.com/fl/20190322153144208228000000-o.jpg"
                            ],
                            "status": "Pending"
                          }, ...]
                      */

                    return data;
                });
        }

        function getMLSAutocompleteWithFilters(keyword, filters = {}) {
            var searchURL = window.location.protocol + '//' + window.location.hostname + '/home-search/auto_complete';

            return superagent
                .get(searchURL)
                .query({ kind: 'listings', query: keyword, ...filters })
                .then(function(res) {
                    /*
                        Of the format:
                          [{
                            "_index": "listing_auto_completes_production_20190723232720775",
                            "_type": "listing_auto_complete",
                            "_id": "235875624",
                            "_score": 0,
                            "status_modified_at": 1553250708,
                            "city": "Jupiter",
                            "price": 1335743,
                            "display_address": "10088 Calabrese Trail Unit: 9 Jupiter FL 33478",
                            "sold_price": null,
                            "id": 235875624,
                            "state": "FL",
                            "photo_urls": [
                              "http://cdn.photos.sparkplatform.com/fl/20190322153144208228000000-o.jpg"
                            ],
                            "status": "Pending"
                          }, ...]
                    */
                    return res.body || [];
                });
        }

        function makeMlsLink(data) {
            // Code Dupe from utils/googlePlace
            // mapping of google data type to mls data type
            var mapping = {
                neighborhood: 'neighborhood',
                locality: 'place',
                administrative_area_level_2: 'county',
                administrative_area_level_1: 'state',
                postal_code: 'postalcode',
            };

            function _filterTypes(types) {
                return types.filter(function(type) { return type !== 'political' });
            }

            if (!data || !Object.keys(data).length) {
                return '/home-search/listings';
            }

            var newData = {};
            _filterTypes(data.types).forEach(function(type) {
                if (mapping[type]) {
                    newData.search_type = mapping[type];
                }
            });
            newData.omnibox = data.formatted_address;
            data.address_components.forEach(function(component) {
                _filterTypes(component.types).forEach(function(type) {
                    if (mapping[type]) {
                        newData[mapping[type]] = component.long_name;
                    }
                });
            });
            var bounds = data.geometry.bounds;
            var convertedData = Object.assign(bounds, newData);

            return '/home-search/listings?' + objectToQuerystring(convertedData);
        }

        function debounce(func, wait) {
            let timeout;
            return function(...args) {
                const context = this;
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(context, args), wait)
            }
        }

        // Function to dynamically load a script
        function loadScript(url, callback) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            script.defer = true;
            script.onload = callback;
            document.head.appendChild(script);
        }

        // Function to dynamically load CSS file
        function loadCSS(url) {
            var link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = url;
            document.head.appendChild(link);
        }

        // Global methods / variables that can be accessed by element js
        window.luxuryPresence = {
            defaults: {
                companyId: '4aedd857-cd18-4f4b-bf1c-3f9a6795fef1',
                apiGatewayUrl: 'https://gw.luxurypresence.com',
                gql: {"agents":"\n  query Agents (\n    $agentId: ID\n    $agentIds: [ID!]\n    $companyId: String\n    $network: Boolean\n    $networkId: String\n    $officeId: [ID!]\n    $offset: Int\n    $limit: Int\n    $sort: String\n    $sortDir: SortDirectionEnum\n    $search: String\n    $tags: [String]\n    $tagsMode: TagsModeEnum\n    $teamId: [ID!]\n    $developmentId: [ID!]\n    $prioritizeIds: Boolean\n  ) {\n    agents (\n      agentId: $agentId\n      agentIds: $agentIds\n      companyId: $companyId\n      network: $network\n      networkId: $networkId\n      officeId: $officeId\n      offset: $offset\n      limit: $limit\n      sort: $sort\n      sortDir: $sortDir\n      search: $search\n      tags: $tags\n      tagsMode: $tagsMode\n      teamId: $teamId\n      developmentId: $developmentId\n      prioritizeIds: $prioritizeIds\n    ) {\n      id\n      firstName\n      lastName\n      avatar {\n        smallUrl\n        mediumUrl\n        largeUrl\n        height\n        width\n      }\n      position\n      bioLong\n      bioShort\n      seoTitle\n      seoDescription\n      slug\n      phoneNumber\n      phoneNumber2\n      license\n      email\n      leadAgent\n      greaterArea\n      tags\n    }\n    agentsCount(\n      agentIds: $agentIds\n      companyId: $companyId\n      network: $network\n      networkId: $networkId\n      officeId: $officeId\n      search: $search\n      tags: $tags\n      tagsMode: $tagsMode\n      teamId: $teamId\n      developmentId: $developmentId\n      prioritizeIds: $prioritizeIds\n    ) {\n      count\n    }\n  }\n","properties":"\n  query Properties(\n    $agentIds: [ID!]\n    $teamIds: [ID!]\n    $propertyId: ID\n    $companyId: String\n    $networkId: String\n    $network: Boolean\n    $statusId: String\n    $propertyIds: [ID!]\n    $prioritizeIds: Boolean\n    $statusIds: [String!]\n    $excludeStatusId: [String!]\n    $neighborhoodId: String\n    $addressState: [String!]\n    $addressCity: [String!]\n    $relatedNeighborhoodPropertyId: String\n    $developmentId: String\n    $featuredListing: Boolean\n    $leaseProperty: Boolean\n    $search: String\n    $searchTermMode: SearchTermModeEnum\n    $globalProperty: Boolean\n    $archived: Boolean\n    $salesPriceGTE: Float\n    $salesPriceLTE: Float\n    $leasePriceGTE: Float\n    $leasePriceLTE: Float\n    $livingSpaceSizeGTE: Float\n    $livingSpaceSizeLTE: Float\n    $bathCountGTE: Float\n    $bathCountLTE: Float\n    $bedroomCountGTE: Float\n    $bedroomCountLTE: Float\n    $architectureStyle: String\n    $lifestyle: String\n    $propertyTypeId: String\n    $propertyTypeIds: [String!]\n    $tag: String\n    $backfillMLSResults: Boolean\n    $displayMLSListings: String\n    $hostname: String\n    $backfillProviders: [String!]\n    $backfillMLSListingIds: [String!]\n    $backfillMLSAgentIds: [String!]\n    $backfillMLSOfficeIds: [String!]\n    $backfillBoundary: JSON\n    $openHouse: Boolean\n    $withGeo: Boolean\n    $advancedFilters: JSON\n    $offset: Int\n    $limit: Int\n    $sort: String\n    $sortDir: SortDirectionEnum\n  ) {\n    properties(\n      \n      agentIds: $agentIds\n      teamIds: $teamIds\n      propertyId: $propertyId\n      propertyIds: $propertyIds\n      prioritizeIds: $prioritizeIds\n      companyId: $companyId\n      network: $network\n      networkId: $networkId\n      statusId: $statusId\n      statusIds: $statusIds\n      excludeStatusId: $excludeStatusId\n      neighborhoodId: $neighborhoodId\n      addressState: $addressState\n      addressCity: $addressCity\n      developmentId: $developmentId\n      featuredListing: $featuredListing\n      leaseProperty: $leaseProperty\n      search: $search\n      searchTermMode: $searchTermMode\n      salesPriceGTE: $salesPriceGTE\n      salesPriceLTE: $salesPriceLTE\n      leasePriceGTE: $leasePriceGTE\n      leasePriceLTE: $leasePriceLTE\n      livingSpaceSizeGTE: $livingSpaceSizeGTE\n      livingSpaceSizeLTE: $livingSpaceSizeLTE\n      bathCountGTE: $bathCountGTE\n      bathCountLTE: $bathCountLTE\n      bedroomCountGTE: $bedroomCountGTE\n      bedroomCountLTE: $bedroomCountLTE\n      architectureStyle: $architectureStyle\n      lifestyle: $lifestyle\n      propertyTypeId: $propertyTypeId\n      propertyTypeIds: $propertyTypeIds\n      tag: $tag\n      archived: $archived\n      globalProperty: $globalProperty\n      withGeo: $withGeo\n      openHouse: $openHouse\n      displayMLSListings: $displayMLSListings\n      advancedFilters: $advancedFilters\n\n      relatedNeighborhoodPropertyId: $relatedNeighborhoodPropertyId\n      backfillMLSResults: $backfillMLSResults\n      hostname: $hostname\n      backfillProviders: $backfillProviders\n      backfillMLSListingIds: $backfillMLSListingIds\n      backfillMLSAgentIds: $backfillMLSAgentIds\n      backfillMLSOfficeIds: $backfillMLSOfficeIds\n      backfillBoundary: $backfillBoundary\n      offset: $offset\n      limit: $limit\n      sort: $sort,\n      sortDir: $sortDir\n    ){\n      id\n      name\n      status\n      salesPrice\n      reducedPrice\n      isPasswordProtected\n      bedroomCount\n      bathCount\n      fullBathCount\n      halfBathCount\n      threeQuarterBathCount\n      fullAddress\n      addressLine1\n      addressLine2\n      addressCity\n      addressState\n      addressCountry\n      postalCode\n      description\n      syncedAt\n      officeName\n      attributionContact\n      neighborhood {\n        id\n      }\n      media {\n        smallUrl\n        mediumUrl\n        largeUrl\n        xLargeUrl\n        xxLargeUrl\n        height\n        width\n      }\n      seoTitle\n      seoDescription\n      slug\n      fromMLS\n      mlsId\n      mlsLogo\n      mlsAttribution\n      openHouse\n      openHouseHours\n      priceUponRequest\n      privateAddress\n      leaseProperty\n      leasePrice\n      currency\n      leaseTermFrequencyInterval\n      leaseTermFrequencyCount\n      leasePeriod\n      livingSpaceSize\n      livingSpaceUnits\n      lotAreaSize\n      lotAreaUnits\n      tags\n      latitude\n      longitude\n      timeZone\n      buyerAgencyCompensation\n      buyerAgencyCompensationType\n    }\n    propertiesCount(\n    \n      agentIds: $agentIds\n      teamIds: $teamIds\n      propertyId: $propertyId\n      propertyIds: $propertyIds\n      prioritizeIds: $prioritizeIds\n      companyId: $companyId\n      network: $network\n      networkId: $networkId\n      statusId: $statusId\n      statusIds: $statusIds\n      excludeStatusId: $excludeStatusId\n      neighborhoodId: $neighborhoodId\n      addressState: $addressState\n      addressCity: $addressCity\n      developmentId: $developmentId\n      featuredListing: $featuredListing\n      leaseProperty: $leaseProperty\n      search: $search\n      searchTermMode: $searchTermMode\n      salesPriceGTE: $salesPriceGTE\n      salesPriceLTE: $salesPriceLTE\n      leasePriceGTE: $leasePriceGTE\n      leasePriceLTE: $leasePriceLTE\n      livingSpaceSizeGTE: $livingSpaceSizeGTE\n      livingSpaceSizeLTE: $livingSpaceSizeLTE\n      bathCountGTE: $bathCountGTE\n      bathCountLTE: $bathCountLTE\n      bedroomCountGTE: $bedroomCountGTE\n      bedroomCountLTE: $bedroomCountLTE\n      architectureStyle: $architectureStyle\n      lifestyle: $lifestyle\n      propertyTypeId: $propertyTypeId\n      propertyTypeIds: $propertyTypeIds\n      tag: $tag\n      archived: $archived\n      globalProperty: $globalProperty\n      withGeo: $withGeo\n      openHouse: $openHouse\n      displayMLSListings: $displayMLSListings\n      advancedFilters: $advancedFilters\n\n    ) {\n      count\n    }\n  }\n","pressReleases":"\n  query PressReleases (\n    $pressReleaseId: ID\n    $companyId: String\n    $offset: Int\n    $limit: Int\n    $sort: String\n    $sortDir: SortDirectionEnum\n    $search: String\n    $categories: [String!]\n    $propertyId: [String!]\n    $developmentId: [String!]\n    $agentId: [String!]\n    $teamId: [String!]\n  ) {\n    pressReleases (\n      pressReleaseId: $pressReleaseId\n      companyId: $companyId\n      offset: $offset\n      limit: $limit\n      sort: $sort\n      sortDir: $sortDir\n      search: $search\n      categories: $categories\n      propertyId: $propertyId\n      developmentId: $developmentId\n      agentId: $agentId\n      teamId: $teamId\n    ) {\n      id\n      title\n      description\n      author\n      externalUrl\n      media {\n        smallUrl\n        mediumUrl\n        largeUrl\n        xLargeUrl\n        xxLargeUrl\n        height\n        width\n      }\n      publishedAt\n      categories\n    }\n    pressReleasesCount(\n      companyId: $companyId\n      search: $search\n      categories: $categories\n      propertyId: $propertyId\n      developmentId: $developmentId\n      agentId: $agentId\n      teamId: $teamId\n    ) {\n      count\n    }\n  }\n","posts":"\n  query Posts (\n    $postId: ID\n    $companyId: String\n    $offset: Int\n    $limit: Int\n    $order: String\n    $sortDir: SortDirectionEnum\n    $search: String\n    $featured: Boolean\n    $categoryId: String\n    $categoryIds: [String!]\n    $neighborhoodId: [String!]\n    ) {\n    posts (\n      postId: $postId\n      companyId: $companyId\n      offset: $offset\n      limit: $limit\n      order: $order\n      sortDir: $sortDir\n      search: $search\n      featured: $featured\n      postStatusId: \"5f528253-abb7-484e-95c3-330269ac1102\"\n      categoryId: $categoryId\n      categoryIds: $categoryIds\n      neighborhoodId: $neighborhoodId\n    ) {\n      id\n      title\n      subtitle\n      description\n      status\n      featured\n      slug\n      categories {\n        id\n        name\n      }\n      createdAt\n      publishedAt\n      scheduledAt\n      createdBy {\n        firstName\n        lastName\n      }\n      customAuthor\n      media {\n        smallUrl\n        mediumUrl\n        largeUrl\n        xLargeUrl\n        xxLargeUrl\n        height\n        width\n      }\n      seoTitle\n      seoDescription\n      slug\n    }\n    postsCount(\n      companyId: $companyId\n      search: $search\n      featured: $featured\n      postStatusId: \"5f528253-abb7-484e-95c3-330269ac1102\"\n      categoryId: $categoryId\n      categoryIds: $categoryIds\n      neighborhoodId: $neighborhoodId\n    ) {\n      count\n    }\n  }\n","testimonials":"\n  query Testimonials(\n    $testimonialId: ID\n    $agentId: ID\n    $companyId: String\n    $offset: Int\n    $limit: Int\n    $sort: String\n    $sortDir: SortDirectionEnum\n    $search: String\n  ) {\n    testimonials(\n      testimonialId: $testimonialId\n      agentId: $agentId\n      companyId: $companyId\n      offset: $offset\n      limit: $limit\n      sort: $sort\n      sortDir: $sortDir\n      search: $search\n    ){\n      id\n      body\n      author\n      position\n      media {\n        smallUrl\n        mediumUrl\n        largeUrl\n        xLargeUrl\n        xxLargeUrl\n        height\n        width\n      }\n      seoTitle\n      seoDescription\n      agents {\n        slug\n        email\n        firstName\n        lastName\n        avatar {\n          smallUrl\n          height\n          width\n        }\n      }\n    }\n    testimonialsCount(\n      companyId: $companyId\n      agentId: $agentId\n      search: $search\n    ) {\n      count\n    }\n  }\n","neighborhoods":"\n  query Neighborhoods (\n    $neighborhoodId: ID\n    $companyId: String\n    $search: String\n    $tag: String\n    $offset: Int\n    $limit: Int\n    $sort: String\n    $sortDir: SortDirectionEnum\n  ) {\n    neighborhoods (\n      neighborhoodId: $neighborhoodId\n      companyId: $companyId\n      search: $search\n      tag: $tag\n      offset: $offset\n      limit: $limit\n      sort: $sort\n      sortDir: $sortDir\n    ) {\n      id\n      name\n      description\n      descriptionShort\n      slug\n      tags\n      googlePlaceData\n      mlsLink\n      createdAt\n      media {\n        smallUrl\n        mediumUrl\n        largeUrl\n        xLargeUrl\n        xxLargeUrl\n        height\n        width\n      }\n      seoTitle\n      seoDescription\n    }\n    neighborhoodsCount(\n      companyId: $companyId\n      search: $search\n      tag: $tag\n    ) {\n      count\n    }\n  }\n","developments":"\n  query Developments (\n    $developmentId: ID\n    $companyId: String\n    $offset: Int\n    $limit: Int\n    $sort: String\n    $sortDir: SortDirectionEnum\n    $search: String\n    $tag: [String!]\n    $agentId: [ID!]\n  ) {\n    developments (\n      developmentId: $developmentId\n      companyId: $companyId\n      offset: $offset\n      limit: $limit\n      sort: $sort\n      sortDir: $sortDir\n      search: $search\n      tag: $tag\n      agentId: $agentId\n    ) {\n      id\n      name\n      description\n      descriptionShort\n      slug\n      createdAt\n      media {\n        smallUrl\n        mediumUrl\n        largeUrl\n        xLargeUrl\n        xxLargeUrl\n        height\n        width\n      }\n      googlePlaceData\n      seoTitle\n      seoDescription\n      tags\n    }\n    developmentsCount(\n      companyId: $companyId\n      search: $search\n      tag: $tag\n      agentId: $agentId\n    ) {\n      count\n    }\n  }\n","pois":"\nquery PointsOfInterest(\n  $regionId: String!,\n  $radius: Int,\n  $offset: Int,\n  $limit: Int,\n  $categories: [PoiCategoryEnum!],\n  $sortBy: PoiSortByEnum\n) {\n pois(\n     regionId: $regionId,\n     radius: $radius,\n     offset: $offset,\n     limit: $limit,\n     categories: $categories,\n     sortBy: $sortBy\n ) {\n  name\n  imageUrl\n  url\n  reviewCount\n  rating\n  price\n  displayPhone\n  distance\n  category\n  location {\n      address1\n      address2\n      address3\n      city\n      zipCode\n      country\n      state\n      }\n  }\n }\n","offices":"\n  query Offices (\n    $officeId: ID\n    $officeIds: [ID!]\n    $companyId: String\n    $slug: String\n    $sort: String\n    $sortDir: SortDirectionEnum\n    $search: String\n    $tags: [String]\n    $offset: Int\n    $limit: Int\n  ) {\n    offices (\n      officeId: $officeId\n      officeIds: $officeIds\n      companyId: $companyId\n      slug: $slug\n      sort: $sort\n      sortDir: $sortDir\n      search: $search\n      tags: $tags\n      offset: $offset\n      limit: $limit\n    ) {\n      id\n      companyId\n      name\n      slug\n      officeMlsId\n      shortDescription\n      fullDescription\n      addressLine1\n      addressLine2\n      addressCity\n      addressState\n      addressPostalCode\n      addressCountry\n      phone\n      email\n      officeHours\n      coordinates\n      googlePlaceData \n      seoTitle\n      seoDescription\n      fullAddress\n      media {\n        id\n        originalUrl\n        thumbnailUrl\n        smallUrl\n        mediumUrl\n        largeUrl\n        xLargeUrl\n        xxLargeUrl\n      }\n    }\n    officesCount(\n      companyId: $companyId\n      officeId: $officeId\n      officeIds: $officeIds\n      slug: $slug\n      search: $search\n      tags: $tags\n    ) {\n      count\n    }\n  }\n","teams":"query TeamsAndCount(\n  $offset: Int\n  $limit: Int\n  $search: String\n  $sort: String\n  $sortDir: SortDirectionEnum\n  $companyId: ID\n) {\n  teams(\n    offset: $offset\n    limit: $limit\n    sort: $sort\n    sortDir: $sortDir\n    search: $search\n    companyId: $companyId\n  ) {\n    \n  id\n  companyId\n  name\n  email\n  shortBio\n  fullBio\n  addressLine1\n  addressLine2\n  addressCity\n  addressState\n  addressCountry\n  phoneNumber1\n  phoneNumber2\n  postalCode\n  avatar {\n    id\n    thumbnailUrl\n    smallUrl\n    mediumUrl\n    largeUrl\n  }\n  urlWebsite\n  socialLinks\n  socialLinksArray\n  tags\n  seoTitle\n  seoDesc\n  slug\n  displayOrder\n\n  }\n  teamsCount(\n    search: $search\n    companyId: $companyId\n  ) {\n    count\n  }\n}"},
                propertyPlaceholderImage: {"id":"84626c6f-57db-4901-91a3-3ca61b867220","alt":null,"bytes":236975,"width":1800,"format":"jpg","height":1200,"shared":true,"duration":null,"largeUrl":"https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ufnycbza8qga30fatqlf/jhp-red-logo","smallUrl":"https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/ufnycbza8qga30fatqlf/jhp-red-logo","authorUrl":null,"mediumUrl":"https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/ufnycbza8qga30fatqlf/jhp-red-logo","sourceUrl":null,"__typename":"Media","altTagText":null,"authorName":null,"sourceName":null,"description":null,"displayName":"jhp-red-logo","originalUrl":"https://res.cloudinary.com/luxuryp/image/upload/v1611691793/ufnycbza8qga30fatqlf.jpg","resourceType":"image","thumbnailUrl":"https://res.cloudinary.com/luxuryp/images/w_320,c_limit,f_auto,q_auto/ufnycbza8qga30fatqlf/jhp-red-logo","originalFileName":"JHP Red Logo"}
            },
            objectToQuerystring: objectToQuerystring,
            getPath: getPath,
            getMLSAutocomplete: getMLSAutocomplete,
            getMLSAutocompleteWithFilters: getMLSAutocompleteWithFilters,
            makeMlsLink: makeMlsLink,
            debounce: debounce,
            libs: {
                loadJs: loadScript,
                loadCss: loadCSS,
                jsLibsMap: {
                    paroller: {
                        jsSrc: 'https://d1e1jt2fj4r8r.cloudfront.net/javascript/jquery.paroller.min.js',
                        isLoaded: false,
                    },
                    ionRangeSlider: {
                        jsSrc: 'https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/js/ion.rangeSlider.min.js',
                        cssSrc: 'https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/css/ion.rangeSlider.min.css',
                        isLoaded: false,
                    }
                },
            },
        };

        var wowOffset = 100;
   
    
        parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"rRV2":[function(require,module,exports) {
module.exports={getVideoFirstFrame:function(e){if(!e||!e.startsWith("https://res.cloudinary.com/"))return null;var t=e.replace("https://res.cloudinary.com/","").replace("f_auto:video","f_auto").split("/");if(-1===t[1].toLowerCase().indexOf("video"))return null;var r=t[t.length-1];r.lastIndexOf(".")>-1?r="".concat(r.slice(0,r.lastIndexOf(".")),".jpg"):r+=".jpg",t[t.length-1]=r;var o=3;"videos"===t[1].toLowerCase()&&""!==t[2]&&(o=2);for(var s=/^(?:[a-z]{1,3}|\$\w+)_\S+$/;o<t.length-1&&s.test(t[o]);)o++;return t.splice(o,0,"so_0,eo_0"),"https://res.cloudinary.com/"+t.join("/")}};
},{}],"KEHU":[function(require,module,exports) {
var e=["lazy"];function t(e,t){if(null==e)return{};var n,a,c=r(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function r(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){return s(e)||u(e,t)||o(e,t)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,c,o,i=[],u=!0,s=!1;try{if(c=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=c.call(r)).done)&&(i.push(n.value),i.length!==t);u=!0);}catch(e){s=!0,a=e}finally{try{if(!u&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw a}}return i}}function s(e){if(Array.isArray(e))return e}var l=require("./cloudinary");function f(r,c){var o=c.isEqual,i=[{field:"thumbnailUrl",w:320},{field:"smallUrl",w:960},{field:"mediumUrl",w:1280},{field:"largeUrl",w:1920},{field:"xLargeUrl",w:2560},{field:"xxLargeUrl",w:3456}],u=function(e,t,r){if(!e)return"";if("string"==typeof e){var n=e.trim();if(/[^+\-0-9.]/.test(n))return e;if(!(e=parseFloat(n)))return""}return"USD"===t?"$".concat(e.toLocaleString("en-US",{maximumFractionDigits:0})):"CAD"===t?"$".concat(e.toLocaleString("en-US",{maximumFractionDigits:0})," CAD"):"EUR"===t?e.toLocaleString("en-US",{style:"currency",currency:"EUR"}).split(".")[0]:"PERCENT"===t?"".concat(e,"%"):r&&"number"==typeof r&&e>-1?e.toLocaleString("en-US",{maximumFractionDigits:r}):e.toLocaleString("en-US")},s=function(e){switch(e){case"DAY":return"daily";case"MONTH":return"monthly";case"WEEK":return"weekly";case"YEAR":return"yearly";case"QUARTER":return"quarterly";case"HALF_YEAR":return"semi-annually";default:return""}},f=function(e){switch(e){case"DAY":return"day";case"WEEK":return"wk";case"MONTH":return"mo";case"YEAR":return"yr";case"QUARTER":return"3 mos";case"HALF_YEAR":return"6 mos";default:return""}},d=function(e,t){var r,n,a=t||{};switch(a.mode){case"short":r=f(e),n=a.frequencySeparator||"/";break;case"standard":case"std":r=function(e){switch(e){case"DAY":return"day";case"WEEK":return"week";case"MONTH":return"month";case"YEAR":return"year";case"QUARTER":return"quarter";case"HALF_YEAR":return"6 months";default:return""}}(e),n=a.frequencySeparator||"/";break;case"long":default:r=s(e),n=a.frequencySeparator||" "}return r?a.frequencyTag||a.frequencyClass?"".concat(n,"<").concat(a.frequencyTag||"span").concat(a.frequencyClass?' class="'.concat(a.frequencyClass,'"'):"",">").concat(r,"</").concat(a.frequencyTag||"span",">"):n+r:""};return{isEmpty:function(e,t){var r=!e||"string"==typeof e&&!e.trim()||!Object.keys(e).length;return t.fn?r?t.fn(this):t.inverse(this):r},ifEquals:function(e,t,r){return o(e,t)?r.fn(this):r.inverse(this)},"raw-helper":function(e){return e.fn()},striptags:function(e){if(!e)return"";return(e=(e=e.replace(/<\!--(.|[\r\n])*?-\->/g,"")).replace(/<(xml|style|svg)("[^"]*"|'[^']*'|[^>])*>(.|[\r\n])*?<\/\1>/gi,"")).replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g,"")},striptagsLineBreaks:function(e){if(!e)return"";return(e=(e=(e=e.replace(/<\!--(.|[\r\n])*?-\->/g,"")).replace(/<(xml|style|svg)("[^"]*"|'[^']*'|[^>])*>(.|[\r\n])*?<\/\1>/gi,"")).replace(/(<br\s*\/?>)|(<\/p\s*>)(?=.*(<\/p\s*>|<br\s*\/?>))/g,"&#10;")).replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g,"")},truncate:function(e,t,r){return e?e.length>t?"string"==typeof r?e.slice(0,t-r.length)+r:e.slice(0,t):e:""},setSubArray:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;(arguments.length>4?arguments[4]:void 0).data.root[n]=e.slice(t,r)},formatAreaUnit:function(e){switch(e){case"ACRE":return"Acres";case"SQUARE_METER":return"Sq.M.";case"SQUARE_YARD":return"Sq.Yd.";default:return"Sq.Ft."}},formatFrequency:s,formatFrequencyShort:f,lpFormatFrequency:function(e,t){return d(e,t&&t.hash)},subArray:function(e,t,r,n){return e>=t&&e<r?n.fn(this):n.inverse(this)},formatPropertyStatus:function(e){var t="";switch(e){case"SOLD":t="Sold";break;case"FOR_SALE":t="For Sale";break;case"COMING_SOON":t="Coming Soon";break;case"INACTIVE":t="Inactive";break;case"POCKET_LISTING":t="Pocket Listing";break;case"PENDING":t="Pending";break;case"UNDER_CONTRACT":t="Under Contract";break;case"ACTIVE_UNDER_CONTRACT":t="Active Under Contract";break;default:t=e}return t},formatGrade:function(e){switch(e){case"UNDERGRADUATE_COURSES":return"Undergrad";case"PRE_KINDERGARTEN":return"PreK";case"KINDERGARTEN":return"K";case"FIRST_GRADE":return"1st";case"SECOND_GRADE":return"2nd";case"THIRD_GRADE":return"3rd";case"FOURTH_GRADE":return"4th";case"FIFTH_GRADE":return"5th";case"SIXTH_GRADE":return"6th";case"SEVENTH_GRADE":return"7th";case"EIGHTH_GRADE":return"8th";case"NINTH_GRADE":return"9th";case"TENTH_GRADE":return"10th";case"ELEVENTH_GRADE":return"11th";case"TWELFTH_GRADE":return"12th";default:return""}},encodeURI:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return encodeURI(e)}),encodeURIComponent:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return encodeURIComponent(e)}),hbFormatDate:function(e,t){var r="current"===e?new Date:new Date(e);if("YYYY"===t||"year"===t)return"".concat(r.getFullYear());if("MM/DD/YY"===t){var n=r.getMonth()+1;return n<10&&(n="0".concat(n.toString())),"".concat(n,"/").concat(r.getDate(),"/").concat(r.getFullYear().toString().substr(-2))}return"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][r.getMonth()]," ").concat(r.getDate(),", ").concat(r.getFullYear())},openHousesFormat:function(e,t,r){if(!e||!t)return"";var n=function(e){var t=e.getHours();t>12&&(t-=12);var r="".concat(t,":").concat(e.getMinutes()>9?e.getMinutes():"0"+e.getMinutes());return e.getHours()>11?r+="PM":r+="AM",r},c="",o=e,i=t;r&&(o=new Date(e).toLocaleString("en-US",{timeZone:r}),i=new Date(t).toLocaleString("en-US",{timeZone:r}),c=a(new Date(t).toLocaleString("en-US",{timeZone:r,timeZoneName:"short"}).split(" "),4)[3]);var u=new Date(o),s=u.toLocaleDateString("en-US"),l=n(u),f=n(new Date(i));return"".concat(s," ").concat(l," - ").concat(f," ").concat(c)},math:function(e,t,r){return{"+":(e=parseFloat(e))+(r=parseFloat(r)),"-":e-r,"*":e*r,"/":e/r,"%":e%r}[t]},findByKey:function(e,t,r,n){var a=(e||[]).find(function(e){return e[t]===r});return n.fn(a)},capitalize:function(e,t,r){var n;return"string"==typeof e&&e.length&&(n=e.toLowerCase().split(t).map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join(" ").toString()),n},and:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Array.prototype.slice.call(t).every(Boolean)},or:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Array.prototype.slice.call(t,0,-1).some(Boolean)},not:function(e){return!e},orderByIds:function(e,t,n){var a="",c=null;n.data&&(c=r.createFrame(n.data));var o=(t||[]).filter(Boolean);if(o&&o.length){var i=0;a=o.reduce(function(t,r,a){var o=(e||[]).find(function(e){return e.id===r});return o?(c&&(c.index=a-i),t+n.fn(o,{data:c})):(i+=1,t)},"")}else for(var u=0,s=(e||[]).length;u<s;u++)c&&(c.index=u),a+=n.fn(e[u],{data:c});return a},ifIn:function(e,t,r){return t&&t.indexOf(e)>-1?r.fn(this):r.inverse(this)},partial:function(e,t){return r.registerPartial(e,r.compile(t.fn())),'<script type="text/x-handlebars-template" class="'.concat(e,' pagination-script">').concat(t.fn(),"</","script",">")},numCompare:function(e,t,r,n){return{"==":function(e,t){return e==t},"===":function(e,t){return e===t},"!=":function(e,t){return e!=t},"<":function(e,t){return e<t},">":function(e,t){return e>t},"<=":function(e,t){return e<=t},">=":function(e,t){return e>=t}}[r](e,t)?!n.fn||n.fn(this):!!n.fn&&n.inverse(this)},lpFormatNumber:u,arrayToHtmlList:function(e,t){return e.reduce(function(e,t){try{return"object"===n(t)||null===t?e:e+"<li>".concat(t,"</li>")}catch(r){}},"")},join:function(e,t,r){return e&&e.join?e.join("string"==typeof t?t:", "):""},dedupe:function(e,t,n){var a=null,c=0,o=new Set;return n.data&&(a=r.createFrame(n.data)),(e||[]).reduce(function(e,r,i){var u=t?r[t]:r;return!o.has(u)||t&&void 0===u?(o.add(u),a&&(a.index=i-c),e+n.fn(r,{data:a})):(c+=1,e)},"")},JSONstringify:function(e,t){return JSON.stringify(e)},formatPropertyPrice:function(){var e,t=((e=arguments.length-1)<0||arguments.length<=e?void 0:arguments[e]).hash,n=arguments.length>1?arguments.length<=0?void 0:arguments[0]:t.property;arguments.length>2&&(t.mode=arguments.length<=1?void 0:arguments[1]),t.mode||(t.mode="short");var a=arguments.length>3?arguments.length<=2?void 0:arguments[2]:t.separator;if("string"!=typeof a&&(a=" | "),n.isPasswordProtected)return"Exclusive Listing";var c=arguments.length>4?arguments.length<=3?void 0:arguments[3]:t.priceUponRequestText;if("string"!=typeof c&&(c="Price Upon Request"),n.priceUponRequest)return c;var o=n.salesPrice,i=null;"SOLD"!==n.status&&"Leased"!==n.status&&n.reducedPrice&&(t.reducedClass?i=n.reducedPrice:o=n.reducedPrice);var s="";i&&(s+="<".concat(t.reducedTag||"span",' class="').concat(t.reducedClass,'">').concat(u(i,n.currency),"</").concat(t.reducedTag||"span",">")),o&&(o=u(o,n.currency),t.priceTag||t.priceClass?s+="<".concat(t.priceTag||"span").concat(t.priceClass?' class="'.concat(t.priceClass,'"'):"",">").concat(o,"</").concat(t.priceTag||"span",">"):s+=o);var l=n.leasePrice&&u(n.leasePrice,n.currency);if(l){s&&(s+=a);var f="".concat(l).concat(d(n.leasePeriod,t));t.leaseTag||t.leaseClass?s+="<".concat(t.leaseTag||"span").concat(t.leaseClass?' class="'.concat(t.leaseClass,'"'):"",">").concat(f,"</").concat(t.leaseTag||"span",">"):s+=f}return new r.SafeString(s)},mediaImage:function(n){var a,c,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n){var u=o.hash,s=u.lazy,l=t(u,e),f="",d="";if("string"==typeof n)f=n;else{var p={},g=n.height,h=n.width,m=n.altTagText;i.forEach(function(e){n[e.field]&&!p[n[e.field]]&&(p[n[e.field]]=e.w)});var y=Object.keys(p);if(!y.length)return;if(m&&(l.alt=m),g&&h&&(g>=h&&(l.class?l.class+=" portrait":l.class="portrait"),"setDims"in o.hash&&(l.width=h,l.height=g)),y.length>1&&h&&h<p[y[y.length-1]]){var v=y.findIndex(function(e){return p[e]>=h});y.splice(v+1),p[y[y.length-1]]=h}y.length>1&&(d=y.map(function(e){return"".concat(e," ").concat(p[e],"w")}).join(", "),y.sort(function(e,t){return Math.abs(p[e]-1280)-Math.abs(p[t]-1280)})),f=y[0]}delete l.setDims,d||delete l.sizes,"alt"in l||(l.alt=""),"loading"in l||null==o||null===(a=o.data)||void 0===a||null===(a=a.root)||void 0===a||null===(a=a.renderOptions)||void 0===a||!a.lazyImages||!((null==o||null===(c=o.data)||void 0===c||null===(c=c.root)||void 0===c?void 0:c.sectionIndex)>1||s)||(l.loading="lazy");var S=Object.keys(l).map(function(e){return"".concat(r.escapeExpression(e),'="').concat(r.escapeExpression(l[e]),'"')}).join(" ");return new r.SafeString('<img src="'.concat(f,'"').concat(d?' srcset="'.concat(d,'"'):"").concat(S?" ".concat(S):"",">"))}},bgImage:function(e){return e?"string"==typeof e?e:e.largeUrl||e.url||"":""},concat:function(){for(var e="",t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];for(var c in r)null!==r[c]&&void 0!==r[c]&&"object"!==n(r[c])&&(e+=r[c]);return e},setVideoExtension:function(e,t){if(!e||!t)return"";var r=new URL(e);if("res.cloudinary.com"!==r.host)return r.pathname.endsWith(".".concat(t))?e:"";var n=r.pathname.lastIndexOf("."),a=r.pathname;return-1!==n&&(a=r.pathname.substr(0,n)),r.pathname="".concat(a,".").concat(t),r.toString()},addVideoSources:function(e,t){if(!e)return"";if(!e.includes("res.cloudinary.com"))return"<source ".concat(t?"data-src":"src",'="').concat(e,'">');var r=e.replace(/\.(?:3gp|mpeg|mp4|m4v|m4p|ogv|ogg|mov|webm)$/,"");return[{format:"webm",codec:"vp9",htmlCodecs:";codecs=vp9"},{format:"mp4",codec:"h265",htmlCodecs:";codecs=hvc1"},{format:"mp4",codec:"h264",htmlCodecs:""}].map(function(e){var n="".concat(r.replace(/f_auto(?::video)?/,"f_".concat(e.format,",vc_").concat(e.codec)),".").concat(e.format);return"<source ".concat(t?"data-src":"src",'="').concat(n,'" type="video/').concat(e.format).concat(e.htmlCodecs,'">')}).join("\n")},cloudinaryVideoFirstFrame:l.getVideoFirstFrame,initials:function(e,t){var r,n,a,c,o;if(!e)return"";null!=t&&null!==(r=t.hash)&&void 0!==r&&r.endChar&&(e=e.split(t.hash.endChar)[0]);var i=+(null==t||null===(n=t.hash)||void 0===n?void 0:n.maxChars)||2,u=null===(a=e.match(/\b\w/g))||void 0===a?void 0:a.slice(0,i);return u?(null!=t&&null!==(c=t.hash)&&void 0!==c&&c.addText&&(u=u.map(function(e){return e+t.hash.addText})),u.join((null==t||null===(o=t.hash)||void 0===o?void 0:o.joinWith)||"").toUpperCase()):""}}}module.exports=f;
},{"./cloudinary":"rRV2"}],"IC7x":[function(require,module,exports) {
function o(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}module.exports=o,module.exports.__esModule=!0,module.exports.default=module.exports;
},{}],"xOn8":[function(require,module,exports) {
function o(e){return module.exports=o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},module.exports.__esModule=!0,module.exports.default=module.exports,o(e)}module.exports=o,module.exports.__esModule=!0,module.exports.default=module.exports;
},{}],"NZya":[function(require,module,exports) {
var e=require("./typeof.js").default;function r(r,t){if("object"!=e(r)||!r)return r;var o=r[Symbol.toPrimitive];if(void 0!==o){var i=o.call(r,t||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}module.exports=r,module.exports.__esModule=!0,module.exports.default=module.exports;
},{"./typeof.js":"xOn8"}],"BCa3":[function(require,module,exports) {
var e=require("./typeof.js").default,r=require("./toPrimitive.js");function o(o){var t=r(o,"string");return"symbol"==e(t)?t:t+""}module.exports=o,module.exports.__esModule=!0,module.exports.default=module.exports;
},{"./typeof.js":"xOn8","./toPrimitive.js":"NZya"}],"WiqS":[function(require,module,exports) {
var e=require("./toPropertyKey.js");function r(r,o){for(var t=0;t<o.length;t++){var u=o[t];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(r,e(u.key),u)}}function o(e,o,t){return o&&r(e.prototype,o),t&&r(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}module.exports=o,module.exports.__esModule=!0,module.exports.default=module.exports;
},{"./toPropertyKey.js":"BCa3"}],"EtW1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ConfigController=void 0;var e=l(require("@babel/runtime/helpers/classCallCheck")),t=l(require("@babel/runtime/helpers/createClass"));function l(e){return e&&e.__esModule?e:{default:e}}var i=exports.ConfigController=function(){return(0,t.default)(function t(l){(0,e.default)(this,t),this.isBuilder=!1,this.companyId=null,this.websiteId=null,this.pageId=null,this.pageMeta=null,this.websiteApiGatewayUrl=null,this.buyerSellerServiceUrl=null,this.leadIngesterUrl=null,this.divolteServiceUrl=null,this.templateId=null,this.leadIngesterEnabled=!1,this.recaptcha={enabled:!1,recaptchaSiteId:""},this.googleMapsAPIKey=null},[{key:"destroy",value:function(){}},{key:"setPage",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.pageId=e,this.pageMeta={sourceResource:t.sourceResource,pageElementId:t.pageElementId,pageQueryVariables:t.pageQueryVariables||{}}}},{key:"setIsBuilder",value:function(e){this.isBuilder=e}},{key:"setCompany",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.companyId=e}},{key:"setWebsite",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.websiteId=e,t.recaptchaSiteId&&(this.recaptcha={enabled:!0,recaptchaSiteId:t.recaptchaSiteId}),t.leadIngesterEnabled&&(this.leadIngesterEnabled=t.leadIngesterEnabled)}},{key:"setWebsiteApiGatewayUrl",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.websiteApiGatewayUrl=e}},{key:"setBuyerSellerServiceUrl",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.buyerSellerServiceUrl=e}},{key:"setDivolteServiceUrl",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.divolteServiceUrl=e}},{key:"setTemplateId",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.templateId=e}},{key:"setLeadIngesterUrl",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.leadIngesterUrl=e}},{key:"setGoogleMapsAPIKey",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.googleMapsAPIKey=e}}])}();
},{"@babel/runtime/helpers/classCallCheck":"IC7x","@babel/runtime/helpers/createClass":"WiqS"}],"NS7G":[function(require,module,exports) {
function e(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}module.exports=e,module.exports.__esModule=!0,module.exports.default=module.exports;
},{}],"oXYo":[function(require,module,exports) {
var e=require("./typeof.js").default,r=require("./assertThisInitialized.js");function o(o,t){if(t&&("object"===e(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return r(o)}module.exports=o,module.exports.__esModule=!0,module.exports.default=module.exports;
},{"./typeof.js":"xOn8","./assertThisInitialized.js":"NS7G"}],"goD2":[function(require,module,exports) {
function e(o){return module.exports=e=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},module.exports.__esModule=!0,module.exports.default=module.exports,e(o)}module.exports=e,module.exports.__esModule=!0,module.exports.default=module.exports;
},{}],"zqo5":[function(require,module,exports) {
function e(o,t){return module.exports=e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,o){return e.__proto__=o,e},module.exports.__esModule=!0,module.exports.default=module.exports,e(o,t)}module.exports=e,module.exports.__esModule=!0,module.exports.default=module.exports;
},{}],"RISo":[function(require,module,exports) {
var e=require("./setPrototypeOf.js");function o(o,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),Object.defineProperty(o,"prototype",{writable:!1}),t&&e(o,t)}module.exports=o,module.exports.__esModule=!0,module.exports.default=module.exports;
},{"./setPrototypeOf.js":"zqo5"}],"dIju":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BaseController=void 0;var e=t(require("@babel/runtime/helpers/createClass")),r=t(require("@babel/runtime/helpers/classCallCheck"));function t(e){return e&&e.__esModule?e:{default:e}}var l=exports.BaseController=(0,e.default)(function e(t,l,s,o){if((0,r.default)(this,e),!this.destroy)throw new Error("Controllers must implement a deconstructor")});
},{"@babel/runtime/helpers/createClass":"WiqS","@babel/runtime/helpers/classCallCheck":"IC7x"}],"zI87":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MODAL_CLOSE_DELAY=void 0;var e=exports.MODAL_CLOSE_DELAY=2e3;
},{}],"Y3TA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ModalController=void 0;var e=l(require("@babel/runtime/helpers/classCallCheck")),t=l(require("@babel/runtime/helpers/createClass")),o=l(require("@babel/runtime/helpers/possibleConstructorReturn")),a=l(require("@babel/runtime/helpers/getPrototypeOf")),r=l(require("@babel/runtime/helpers/inherits")),i=require("./base"),n=require("./constants");function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r){return t=(0,a.default)(t),(0,o.default)(e,d()?Reflect.construct(t,r||[],(0,a.default)(e).constructor):t.apply(e,r))}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(d=function(){return!!e})()}var u=exports.ModalController=function(o){function a(t,o,r,i){var n;return(0,e.default)(this,a),(n=s(this,a,[t,o,r,i])).config=t,n.window=o,n.document=r,n.$=i,n.setLoginState=n.setLoginState.bind(n),n.pageId=null,n.modals=[],n.exitModalTriggered={},n.exitModalEventListeners=[],n}return(0,r.default)(a,o),(0,t.default)(a,[{key:"initialize",value:function(e){var t=this;try{var o=this.config,a=this.$;this.pageId=o.pageId,this.modals=a("body > #modals > .modal"),e.modals.forEach(function(e){t._attachModalHandler(e)})}catch(r){console.log(r)}}},{key:"destroy",value:function(){var e=this.document;this.exitModalEventListeners.forEach(function(t){e.removeEventListener("mouseout",t)}),this.modals=[],this.exitModalTriggered={},this.exitModalEventListeners=[]}},{key:"setModalWithExpiry",value:function(e){var t=this.window,o=(new Date).getTime()+864e5,a="modal-controller-".concat(e);try{t.localStorage.setItem(a,JSON.stringify(o))}catch(r){}}},{key:"setLoginState",value:function(){var e=this.window;try{e.localStorage.setItem("isSignedUp","true")}catch(t){}}},{key:"getModalWithExpiry",value:function(e){var t=this.window.localStorage,o=t.getItem("modal-controller-".concat(e));if(!o)return!1;var a=JSON.parse(o);return!((new Date).getTime()>a)||(t.removeItem("modal-controller-".concat(e)),!1)}},{key:"show",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=this.window,a=this.getModalWithExpiry(e);(e&&!a||!0===t.forced)&&(o.lpUI.showModal("modal-".concat(e),t),this.setModalWithExpiry(e))}},{key:"_attachModalHandler",value:function(e){var t=this.pageId,o=e.trigger;if(e.pageSpecific&&!e.pages.map(function(e){return e.pageId}).includes(t))return;"EXIT"===o?this._exitModalHandler(e):"TIMER"===o?this._timerModalHandler(e):"FORCED"===o&&this._forcedModalHandler(e)}},{key:"_exitModalHandler",value:function(e){var t=this,o=this.document,a=this.exitModalTriggered,r=e.modalId;function i(e){a[r]||e.toElement||e.relatedTarget||(t.show(r),a[r]=!0)}o.addEventListener("mouseout",i),this.exitModalEventListeners.push(i)}},{key:"_timerModalHandler",value:function(e){var t=this,o=e.modalId,a=e.timerDelay;setTimeout(function(){t.show(o)},a)}},{key:"_forcedModalHandler",value:function(e){var t=this,o=e.modalId,a=this.window,r=this.$;if(!("true"===a.localStorage.getItem("isSignedUp"))){var i=r("#modal-".concat(o)).find("form"),l=i.eq(0).data("delay")||n.MODAL_CLOSE_DELAY;i.on("formsubmitted",function(){t.setLoginState()}),r(a).on("oauthSuccess.lpui-auto-clean",function(){t.setLoginState(),i.addClass("success"),setTimeout(function(){a.lpUI.hideModal("modal-".concat(o)),i[0].reset(),i.removeClass("success")},l)}),this.show(o,{forced:!0})}}}])}(i.BaseController);
},{"@babel/runtime/helpers/classCallCheck":"IC7x","@babel/runtime/helpers/createClass":"WiqS","@babel/runtime/helpers/possibleConstructorReturn":"oXYo","@babel/runtime/helpers/getPrototypeOf":"goD2","@babel/runtime/helpers/inherits":"RISo","./base":"dIju","./constants":"zI87"}],"gIqS":[function(require,module,exports) {
function e(e,o,t,n,r,u,i){try{var d=e[u](i),l=d.value}catch(s){return void t(s)}d.done?o(l):Promise.resolve(l).then(n,r)}function o(o){return function(){var t=this,n=arguments;return new Promise(function(r,u){var i=o.apply(t,n);function d(o){e(i,r,u,d,l,"next",o)}function l(o){e(i,r,u,d,l,"throw",o)}d(void 0)})}}module.exports=o,module.exports.__esModule=!0,module.exports.default=module.exports;
},{}],"Qodp":[function(require,module,exports) {
var define;
var t,r=require("./typeof.js").default;function e(){"use strict";module.exports=e=function(){return n},module.exports.__esModule=!0,module.exports.default=module.exports;var t,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",h=u.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof w?r:w,i=Object.create(o.prototype),u=new T(n||[]);return a(i,"_invoke",{value:G(t,e,u)}),i}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=s;var y="suspendedStart",v="suspendedYield",d="executing",g="completed",m={};function w(){}function x(){}function L(){}var b={};f(b,c,function(){return this});var E=Object.getPrototypeOf,_=E&&E(E(F([])));_&&_!==o&&i.call(_,c)&&(b=_);var j=L.prototype=w.prototype=Object.create(b);function O(t){["next","throw","return"].forEach(function(r){f(t,r,function(t){return this._invoke(r,t)})})}function k(t,e){function n(o,a,u,c){var l=p(t[o],t,a);if("throw"!==l.type){var h=l.arg,f=h.value;return f&&"object"==r(f)&&i.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,u,c)},function(t){n("throw",t,u,c)}):e.resolve(f).then(function(t){h.value=t,u(h)},function(t){return n("throw",t,u,c)})}c(l.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new e(function(e,o){n(t,r,e,o)})}return o=o?o.then(i,i):i()}})}function G(r,e,n){var o=y;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=N(u,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var l=p(r,e,n);if("normal"===l.type){if(o=n.done?g:v,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=g,n.method="throw",n.arg=l.arg)}}}function N(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,N(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function P(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function F(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(r(e)+" is not iterable")}return x.prototype=L,a(j,"constructor",{value:L,configurable:!0}),a(L,"constructor",{value:x,configurable:!0}),x.displayName=f(L,h,"GeneratorFunction"),n.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===x||"GeneratorFunction"===(r.displayName||r.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,f(t,h,"GeneratorFunction")),t.prototype=Object.create(j),t},n.awrap=function(t){return{__await:t}},O(k.prototype),f(k.prototype,l,function(){return this}),n.AsyncIterator=k,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new k(s(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},O(j),f(j,h,"Generator"),f(j,c,function(){return this}),f(j,"toString",function(){return"[object Generator]"}),n.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=F,T.prototype={constructor:T,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!r)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function n(n,o){return u.type="throw",u.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:F(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),m}},n}module.exports=e,module.exports.__esModule=!0,module.exports.default=module.exports;
},{"./typeof.js":"xOn8"}],"BxGn":[function(require,module,exports) {
function e(o){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(o)}var o=require("../helpers/regeneratorRuntime")();module.exports=o;try{regeneratorRuntime=o}catch(t){"object"===("undefined"==typeof globalThis?"undefined":e(globalThis))?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}
},{"../helpers/regeneratorRuntime":"Qodp"}],"DEGM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.loGet=exports.goTo=void 0;var o=exports.goTo=function(o){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];o&&(e?window.open(o):window.location.assign(o))},e=exports.loGet=function(o,e,r){if(e){var t=(Array.isArray(e)?e:e.match(/([^[.\]])+/g)).reduce(function(o,e){return o&&o[e]},o);return void 0===t?r:t}};
},{}],"kToa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ButtonController=void 0;var e=u(require("@babel/runtime/helpers/asyncToGenerator")),t=u(require("@babel/runtime/helpers/classCallCheck")),n=u(require("@babel/runtime/helpers/createClass")),a=u(require("@babel/runtime/helpers/possibleConstructorReturn")),o=u(require("@babel/runtime/helpers/getPrototypeOf")),r=u(require("@babel/runtime/helpers/inherits")),i=u(require("@babel/runtime/regenerator")),c=require("../utils/navigation"),l=require("./base");function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n){return t=(0,o.default)(t),(0,a.default)(e,d()?Reflect.construct(t,n||[],(0,o.default)(e).constructor):t.apply(e,n))}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(d=function(){return!!e})()}var b=exports.ButtonController=function(a){function o(e,n,a,r){var i;return(0,t.default)(this,o),(i=s(this,o,[e,n,a,r])).config=e,i.window=n,i.document=a,i.$=r,i._boundClickHandler=i._buttonClickHandler.bind(i),i}return(0,r.default)(o,a),(0,n.default)(o,[{key:"initialize",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{(0,this.$)("body").off("click","button, a",this._boundClickHandler).on("click","button, a",this._boundClickHandler)}catch(e){console.log(e)}}},{key:"destroy",value:function(){(0,this.$)("body").off("click","button, a",this._boundClickHandler)}},{key:"_buttonClickHandler",value:function(e){var t=this.$;this._handleButtonClick(e,t(e.currentTarget))}},{key:"_handleButtonClick",value:function(){var t=(0,e.default)(i.default.mark(function e(t,n){var a,o,r,l,u,s,d,b,v;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.window,o=this.document,r=n.data("type")||"",l=n.attr("href")||n.data("href"),u=n.attr("target")||"",!(s=n.data("submit"))){e.next=14;break}return e.prev=6,e.next=9,this._handleSubmit(n);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(6),console.log(e.t0);case 14:if(this._trackConversion(n),"VIDEO"!==r){e.next=18;break}return this._handleVideoButton(n),e.abrupt("return");case 18:if("CONTACT_US"!==r){e.next=21;break}return this._handleContactUsButton(n),e.abrupt("return");case 21:if("SUBSCRIBE"!==r){e.next=24;break}return a.lpUI.showModal("modal-global-subscribe"),e.abrupt("return");case 24:if("MY_ACCOUNT"!==r){e.next=27;break}return a.lpUI.showModal("modal-global-my-account"),e.abrupt("return");case 27:if("SHARE_POPUP"!==r){e.next=31;break}return n.find(".share-popup").css("display","flex"),t.stopPropagation(),e.abrupt("return");case 31:if("MODAL_"!==r.substring(0,6)){e.next=35;break}return d=r.substring(6),a.lpUI.showModal("modal-".concat(d)),e.abrupt("return");case 35:l&&0===l.indexOf("mailto:")?(b=l.replace("mailto:",""),o.sendGoogleAnalyticsEvent({hitType:"event",eventCategory:"button",eventAction:"click",eventLabel:"Email",eventValue:b})):l&&0===l.indexOf("tel:")&&(v=n.attr("href").replace("tel:",""),o.sendGoogleAnalyticsEvent({hitType:"event",eventCategory:"button",eventAction:"click",eventLabel:"Phone",eventValue:v})),s&&(0,c.goTo)(l,"_blank"===u);case 37:case"end":return e.stop()}},e,this,[[6,11]])}));return function(e,n){return t.apply(this,arguments)}}()},{key:"_handleSubmit",value:function(){var t=(0,e.default)(i.default.mark(function e(t){var n,a,o;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.closest("form"),a=this.window,o=this.$,!n){e.next=6;break}return e.next=5,a.luxuryPresence.contactForms.submitForm(o(n));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"_handleVideoButton",value:function(e){var t,n=this.$,a=n("body"),o=e.closest("section"),r=e.attr("data-src"),i="",c="";if(r&&(-1!==r.indexOf("youtube.com")||r.indexOf("youtu.be")>-1)&&r.indexOf("youtube.com/embed")<0){var l=r.match(/(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v=))|youtu.be\/)([a-zA-Z0-9_-]{6,11})/);l&&(i=l[1])}if(r&&-1!==r.indexOf("vimeo.com")){var u=r.match(/(?:(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|)|player.vimeo.com\/video\/)(\d{6,9})(?:\/(\w+))?(?:|\/\?)/);u&&(c=u[3],t=u[4])}i?r="https://youtube.com/embed/".concat(i,"?autoplay=1&controls=0"):c&&(r=t?"https://player.vimeo.com/video/".concat(c,"?h=").concat(t,"&autoplay=1"):"https://player.vimeo.com/video/".concat(c,"?autoplay=1")),r&&o&&(a.append('<div id="modal-'.concat(o.attr("id"),'" class="modal visible">')+'<div class="modal-content"><div class="lightbox-video"><div class="video-player"><div class="embed-container">'+'<iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="'.concat(r,'"></iframe>')+'</div></div></div></div><button class="close lp-close" type="button" aria-label="close modal"><span class="lp-close-icon" aria-hidden="true"></span></button></div>'),n("#modal-".concat(o.attr("id")," .close")).click(function(){n("#modal-".concat(o.attr("id"))).remove()}))}},{key:"_handleContactUsButton",value:function(e){var t=this.window;this.document.sendGoogleAnalyticsEvent({hitType:"event",eventCategory:"button",eventAction:"click",eventLabel:"contact"}),t.lpUI.showModal("modal-global-contact-us",{scrollLock:!0})}},{key:"_trackConversion",value:function(e){var t=this.window,n=this.document,a=e.data("gtag-conversion-id"),o=e.data("gtag-conversion-label"),r=e.data("fb-event-name");if(a&&o){if(t.dataLayer&&t.dataLayer.length)t.dataLayer.forEach(function(e){return e.length&&"config"===e[0]&&e[1]===a})||n.sendGoogleTagManagerEvent("config",a);var i="".concat(a,"/").concat(o);n.sendGoogleTagManagerEvent("event","conversion",{send_to:i})}t.fbq&&r&&t.fbq("track",r,{})}}])}(l.BaseController);
},{"@babel/runtime/helpers/asyncToGenerator":"gIqS","@babel/runtime/helpers/classCallCheck":"IC7x","@babel/runtime/helpers/createClass":"WiqS","@babel/runtime/helpers/possibleConstructorReturn":"oXYo","@babel/runtime/helpers/getPrototypeOf":"goD2","@babel/runtime/helpers/inherits":"RISo","@babel/runtime/regenerator":"BxGn","../utils/navigation":"DEGM","./base":"dIju"}],"a3AZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ValidationController=void 0;var e=a(require("@babel/runtime/helpers/classCallCheck")),t=a(require("@babel/runtime/helpers/createClass")),i=a(require("@babel/runtime/helpers/possibleConstructorReturn")),n=a(require("@babel/runtime/helpers/getPrototypeOf")),r=a(require("@babel/runtime/helpers/inherits")),l=require("./base");function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r){return t=(0,n.default)(t),(0,i.default)(e,o()?Reflect.construct(t,r||[],(0,n.default)(e).constructor):t.apply(e,r))}function o(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(o=function(){return!!e})()}var s=exports.ValidationController=function(i){function n(t,i,r,l){var a;return(0,e.default)(this,n),(a=u(this,n,[t,i,r,l])).config=t,a.window=i,a.document=r,a.$=l,a}return(0,r.default)(n,i),(0,t.default)(n,[{key:"initialize",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]}},{key:"destroy",value:function(){}},{key:"applyFieldValidation",value:function(e){this._applyFieldValidation(e)}},{key:"_applyFieldValidation",value:function(e){switch(e.getAttribute("type")){case"tel":this._applyPhoneValidation(e)}}},{key:"_applyPhoneValidation",value:function(e){var t=this.window.libphonenumber.PhoneNumberUtil.getInstance();e.addEventListener("keyup",function(){if(this.hasAttribute("required")||this.value.replace(/\s/g,"").length)try{var e=this.value,i=t.parseAndKeepRawInput(e,"US");t.isValidNumber(i)?this.setCustomValidity(""):this.setCustomValidity("Please enter a valid phone number.")}catch(n){this.setCustomValidity("Please enter a valid phone number.")}else this.setCustomValidity("")})}}])}(l.BaseController);
},{"@babel/runtime/helpers/classCallCheck":"IC7x","@babel/runtime/helpers/createClass":"WiqS","@babel/runtime/helpers/possibleConstructorReturn":"oXYo","@babel/runtime/helpers/getPrototypeOf":"goD2","@babel/runtime/helpers/inherits":"RISo","./base":"dIju"}],"cQfh":[function(require,module,exports) {
var e=require("./toPropertyKey.js");function r(r,o,t){return(o=e(o))in r?Object.defineProperty(r,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[o]=t,r}module.exports=r,module.exports.__esModule=!0,module.exports.default=module.exports;
},{"./toPropertyKey.js":"BCa3"}],"kqOT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ContactFormController=exports.ADD_FIELD=void 0;var e=l(require("@babel/runtime/helpers/defineProperty")),t=l(require("@babel/runtime/helpers/asyncToGenerator")),r=l(require("@babel/runtime/helpers/classCallCheck")),a=l(require("@babel/runtime/helpers/createClass")),n=l(require("@babel/runtime/helpers/possibleConstructorReturn")),i=l(require("@babel/runtime/helpers/getPrototypeOf")),o=l(require("@babel/runtime/helpers/inherits")),s=l(require("@babel/runtime/regenerator")),c=require("./base"),u=require("./constants");function l(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function f(t){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?d(Object(a),!0).forEach(function(r){(0,e.default)(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function h(e,t,r){return t=(0,i.default)(t),(0,n.default)(e,m()?Reflect.construct(t,r||[],(0,i.default)(e).constructor):t.apply(e,r))}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(m=function(){return!!e})()}var p=exports.ADD_FIELD="middleName",v="contact_form",g=["name","firstName","lastName",p,"email","phone","phoneNumber","source","message","mlsId","sourceUrl"],b=exports.ContactFormController=function(e){function n(e,t,a,i){var o;return(0,r.default)(this,n),(o=h(this,n,[e,t,a,i])).config=e,o.window=t,o.document=a,o.$=i,o.forms=[],o}return(0,o.default)(n,e),(0,a.default)(n,[{key:"initialize",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var r=this.$,a=t.selector,n=[];(n=r(a?"".concat(a,' form[data-type="contact-form"]'):'form[data-type="contact-form"]')).each(function(t,a){e._attachSubmitHandler(r(a)),e._attachValidation(r(a))}),this.forms=this.forms.concat(n)}catch(i){console.log(i)}}},{key:"destroy",value:function(){this.forms=[]}},{key:"submitForm",value:function(e){this._handleSubmit(null,e)}},{key:"_attachValidation",value:function(e){var t=this.window;e.find("input,select,textarea").each(function(){t.luxuryPresence.validation.applyFieldValidation(this)})}},{key:"_attachSubmitHandler",value:function(e){var t=this;e.submit(function(r){return t._handleSubmit(r,e)})}},{key:"_handleSubmit",value:function(){var e=(0,t.default)(s.default.mark(function e(t,r){var a,n,i,o,c,l,d,h,m,p,b,y,_,O;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.window,n=this.config,t&&t.preventDefault(),!r.hasClass("loading")){e.next=4;break}return e.abrupt("return");case 4:if(r.addClass("loading"),i=null,!n.recaptcha.enabled){e.next=10;break}return e.next=9,this._recaptchaToken();case 9:i=e.sent;case 10:if(o={},r.serializeArray().forEach(function(e){"string"==typeof e.value?o[e.name]=e.value.trim():o[e.name]=e.value}),!o.name&&o.firstName&&(o.name=o.firstName,o.lastName&&(o.name+=" ".concat(o.lastName))),c=this._getFields(r),l=Object.keys(f({},o)).filter(function(e){return!g.includes(e)}).reduce(function(e,t){return e[t]=o[t],e},{}),d=n.pageId,h=n.companyId,m=n.websiteId,p=n.pageMeta,b=a.localStorage.getItem("utm_vars")||"{}",y=this._getFormId(r),_={g_recaptcha_response:i,g_recaptcha_action:v,activity:{author_email:o.email,author_name:o.name,author_phone:o.phone||o.phoneNumber,activity_source:o.source||"CONTACT_INQUIRY",comments_attributes:[{text:o.message||void 0}],source_url:a.location.href,content:f(f({},l),JSON.parse(b))},page:{pageId:d,companyId:h,websiteId:m,pageMeta:f(f({},p),{},{formId:y})},companyId:h,fields:c},!o.middleName){e.next=24;break}return e.abrupt("return");case 24:return e.prev=24,e.next=27,this._submitLeadRequest(_);case 27:this._sendGAEvent(_),O=r.eq(0).data("delay")||u.MODAL_CLOSE_DELAY,r.removeClass("loading"),r.addClass("success"),r.find(".success").removeClass("hide"),r.trigger("formsubmitted"),setTimeout(function(){a.lpUI.hideClosestModal(r),r[0].reset(),a.lpUI.sideMenuHide(),r.find(".success").addClass("hide"),r.removeClass("success")},O),e.next=42;break;case 36:e.prev=36,e.t0=e.catch(24),console.log(e.t0),r.trigger("formsubmiterror"),r.removeClass("loading"),r.addClass("error");case 42:case"end":return e.stop()}},e,this,[[24,36]])}));return function(t,r){return e.apply(this,arguments)}}()},{key:"_recaptchaToken",value:function(){var e=this.window,t=this.config;if(t.recaptcha.recaptchaSiteId)return new Promise(function(r,a){e.grecaptcha.enterprise.ready(function(){e.grecaptcha.enterprise.execute(t.recaptcha.recaptchaSiteId,{action:v}).then(function(e){return r(e)}).catch(function(e){return a(e)})})});console.log("No recaptchaSiteId provided")}},{key:"_submitLeadRequest",value:function(e){var t=this.$,r=this.config;return new Promise(function(a,n){var i;i=r.leadIngesterEnabled?"".concat(r.leadIngesterUrl,"/api/v1/leads"):"/home-search/activities",t.post(i,JSON.parse(JSON.stringify(e)),function(e){return a(e)}).fail(function(e){return n(e)})})}},{key:"_sendGAEvent",value:function(e){var t=this.document,r={hitType:"event",eventCategory:"button",eventAction:"click"};switch(e.activity.activity_source){case"NEWSLETTER_SIGNUP":r.eventLabel="Newsletter",t.sendGoogleTagManagerEvent("event","newsletter_signup");break;case"HOME_SEARCH":r.eventLabel="HomeSearch",t.sendGoogleTagManagerEvent("event","home_search");break;case"HOME_VALUE":case"HOME_VALUATION":r.eventLabel="HomeValue",t.sendGoogleTagManagerEvent("event","home_valuation");break;case"EBOOK":r.eventLabel="Ebook",t.sendGoogleTagManagerEvent("event","ebook_download");break;case"CONTACT_INQUIRY":default:r={hitType:"pageview",page:"/thank-you"},t.sendGoogleTagManagerEvent("event","contact_inquiry")}t.sendGoogleAnalyticsEvent(r)}},{key:"_getFields",value:function(e){var t=this.$,r=e.find("input,select,textarea"),a={};return r.each(function(){var r=this.getAttribute("id"),n=this.getAttribute("name"),i=this.getAttribute("type");if(n===p)return!0;var o=null;if(r){var s=e.find("label[for='".concat(r,"']"));s.length>0?o=t(s[0]).text().trim():this.getAttribute("placeholder")&&this.getAttribute("placeholder").length>0&&(o=this.getAttribute("placeholder").trim())}a[n]={label:o,type:this.tagName,inputType:"SELECT"!==this.tagName&&"TEXTAREA"!==this.tagName?i:"text"}}),a}},{key:"_getFormId",value:function(e){var t=e.closest("section[id^='section-'], footer[id], .modal[id^='modal-']");return t&&t.attr("id")?this._cleanFormId(t.attr("id")):""}},{key:"_cleanFormId",value:function(e){for(var t=0,r=["section-","modal-"];t<r.length;t++){var a=r[t];if(e.startsWith(a))return e.substring(a.length)}return e}}])}(c.BaseController);
},{"@babel/runtime/helpers/defineProperty":"cQfh","@babel/runtime/helpers/asyncToGenerator":"gIqS","@babel/runtime/helpers/classCallCheck":"IC7x","@babel/runtime/helpers/createClass":"WiqS","@babel/runtime/helpers/possibleConstructorReturn":"oXYo","@babel/runtime/helpers/getPrototypeOf":"goD2","@babel/runtime/helpers/inherits":"RISo","@babel/runtime/regenerator":"BxGn","./base":"dIju","./constants":"zI87"}],"VSe6":[function(require,module,exports) {
function e(e,o){if(null==e)return{};var r,t,u={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],o.indexOf(r)>=0||(u[r]=e[r]);return u}module.exports=e,module.exports.__esModule=!0,module.exports.default=module.exports;
},{}],"lfm6":[function(require,module,exports) {
var e=require("./objectWithoutPropertiesLoose.js");function r(r,o){if(null==r)return{};var t,l,u=e(r,o);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(r);for(l=0;l<p.length;l++)t=p[l],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(u[t]=r[t])}return u}module.exports=r,module.exports.__esModule=!0,module.exports.default=module.exports;
},{"./objectWithoutPropertiesLoose.js":"VSe6"}],"DCTP":[function(require,module,exports) {
function e(e){if(Array.isArray(e))return e}module.exports=e,module.exports.__esModule=!0,module.exports.default=module.exports;
},{}],"LoeL":[function(require,module,exports) {
function e(e,l){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,u,n,o,f=[],a=!0,i=!1;try{if(n=(r=r.call(e)).next,0===l){if(Object(r)!==r)return;a=!1}else for(;!(a=(t=n.call(r)).done)&&(f.push(t.value),f.length!==l);a=!0);}catch(e){i=!0,u=e}finally{try{if(!a&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(i)throw u}}return f}}module.exports=e,module.exports.__esModule=!0,module.exports.default=module.exports;
},{}],"jEQo":[function(require,module,exports) {
function e(e,o){(null==o||o>e.length)&&(o=e.length);for(var l=0,r=new Array(o);l<o;l++)r[l]=e[l];return r}module.exports=e,module.exports.__esModule=!0,module.exports.default=module.exports;
},{}],"Dbv9":[function(require,module,exports) {
var r=require("./arrayLikeToArray.js");function e(e,t){if(e){if("string"==typeof e)return r(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(e,t):void 0}}module.exports=e,module.exports.__esModule=!0,module.exports.default=module.exports;
},{"./arrayLikeToArray.js":"jEQo"}],"MWEO":[function(require,module,exports) {
function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=e,module.exports.__esModule=!0,module.exports.default=module.exports;
},{}],"DERy":[function(require,module,exports) {
var e=require("./arrayWithHoles.js"),r=require("./iterableToArrayLimit.js"),o=require("./unsupportedIterableToArray.js"),t=require("./nonIterableRest.js");function u(u,s){return e(u)||r(u,s)||o(u,s)||t()}module.exports=u,module.exports.__esModule=!0,module.exports.default=module.exports;
},{"./arrayWithHoles.js":"DCTP","./iterableToArrayLimit.js":"LoeL","./unsupportedIterableToArray.js":"Dbv9","./nonIterableRest.js":"MWEO"}],"auLy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.STATIC_MAP_MAX_DIM=exports.MapApiLoaderController=void 0;var e=h(require("@babel/runtime/helpers/defineProperty")),t=h(require("@babel/runtime/helpers/objectWithoutProperties")),r=h(require("@babel/runtime/helpers/slicedToArray")),n=h(require("@babel/runtime/helpers/asyncToGenerator")),a=h(require("@babel/runtime/helpers/classCallCheck")),i=h(require("@babel/runtime/helpers/createClass")),c=h(require("@babel/runtime/helpers/possibleConstructorReturn")),s=h(require("@babel/runtime/helpers/getPrototypeOf")),o=h(require("@babel/runtime/helpers/inherits")),u=h(require("@babel/runtime/regenerator")),l=require("./base"),p=["srcWidth","srcHeight","theme"];function h(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function d(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?f(Object(n),!0).forEach(function(r){(0,e.default)(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function y(e,t,r){return t=(0,s.default)(t),(0,c.default)(e,v()?Reflect.construct(t,r||[],(0,s.default)(e).constructor):t.apply(e,r))}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(v=function(){return!!e})()}var b="__googleMapsCallback",g="https://maps.googleapis.com/maps/api/js",m=exports.STATIC_MAP_MAX_DIM=1024,k=exports.MapApiLoaderController=function(e){function c(e,t,r,n){var i;return(0,a.default)(this,c),(i=y(this,c,[e,t,r,n])).config=e,i.window=t,i.document=r,i.$=n,i.retries=3,i.callbacks=[],i.id="__googleMapsScriptId".concat(Date.now()),i._apiKey="",i.reset(),i}return(0,o.default)(c,e),(0,i.default)(c,[{key:"apiKey",get:function(){return this._apiKey},set:function(e){this._apiKey=e,this.config.setGoogleMapsAPIKey(e)}},{key:"reset",value:function(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}},{key:"destroy",value:function(){this.reset()}},{key:"getMapApiKey",value:function(){var e=(0,n.default)(u.default.mark(function e(){var t;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.apiKey){e.next=2;break}return e.abrupt("return",this.apiKey);case 2:return e.prev=2,e.next=5,this.$.get("".concat(this._getBaseUrl(),"/api/v1/map"));case 5:return t=e.sent,this.apiKey=t,e.abrupt("return",this.apiKey);case 10:return e.prev=10,e.t0=e.catch(2),console.error(e.t0),e.abrupt("return","");case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"createUrl",value:function(){var e=(0,n.default)(u.default.mark(function e(){var t,r;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=g,t+="?callback=".concat(b),e.next=4,this.getMapApiKey();case 4:return(r=e.sent)&&(t+="&key=".concat(r)),t+="&libraries=places",e.abrupt("return",t);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"setScript",value:function(){var e=(0,n.default)(u.default.mark(function e(){var t,r;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.document.getElementById(this.id)){e.next=3;break}return this.callback(),e.abrupt("return");case 3:return e.next=5,this.createUrl();case 5:t=e.sent,(r=this.document.createElement("script")).id=this.id,r.type="text/javascript",r.src=t,r.onerror=this.loadErrorCallback.bind(this),r.defer=!0,r.async=!0,this.document.head.appendChild(r);case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"loadErrorCallback",value:function(e){var t=this;if(this.errors.push(e),this.errors.length<=this.retries){var r=this.errors.length*Math.pow(2,this.errors.length);console.log("Failed to load Google Maps script, retrying in ".concat(r," ms.")),setTimeout(function(){t.deleteScript(),t.setScript()},r)}else this.onerrorEvent=e,this.callback()}},{key:"deleteScript",value:function(){var e=this.document.getElementById(this.id);e&&e.remove()}},{key:"load",value:function(){return this.loadPromise()}},{key:"loadPromise",value:function(){var e=this;return new Promise(function(t,r){e.loadCallback(function(e){e?r(e):t()})})}},{key:"loadCallback",value:function(e){this.callbacks.push(e),this.execute()}},{key:"setCallback",value:function(){this.window.__googleMapsCallback=this.callback.bind(this)}},{key:"resetIfRetryingFailed",value:function(){this.failed&&this.reset()}},{key:"callback",value:function(){var e=this;this.done=!0,this.loading=!1,this.callbacks.forEach(function(t){t(e.onerrorEvent)}),this.callbacks=[]}},{key:"execute",value:function(){this.window.google&&this.window.google.maps&&this.window.google.maps.version&&this.callback(),this.resetIfRetryingFailed(),this.done?this.callback():this.loading||(this.loading=!0,this.setCallback(),this.setScript())}},{key:"_getBaseUrl",value:function(){var e=this.config,t=e.isBuilder,r=e.websiteApiGatewayUrl;return t?r:""}},{key:"resizeStaticMapDimensions",value:function(e,t){if(e<=m&&t<=m)return{width:e,height:t};var r=Math.min(m/e,m/t);return{width:parseInt(e*r),height:parseInt(t*r)}}},{key:"convertThemeToStaticApiUrl",value:function(e){return e.map(function(e){var t=e.stylers.reduce(function(e,t){var r=t.visibility?"visibility:".concat(t.visibility):"",n=t.color?"color:".concat(t.color.replace("#","0x")):"",a=t.lightness?"lightness:".concat(t.lightness):"";return"".concat(e,"|").concat(r).concat(n).concat(a)},""),r=e.elementType?"|element:".concat(e.elementType):"";return"feature:".concat(e.featureType).concat(r).concat(t)})}},{key:"getMapApiSignedUrl",value:function(){var e=(0,n.default)(u.default.mark(function e(t){var r,n;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$.get("".concat(this._getBaseUrl(),"/api/v1/map/signature?").concat(t));case 3:return r=e.sent,n=r.url,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return","");case 12:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t){return e.apply(this,arguments)}}()},{key:"generateStaticMapUrl",value:function(e,t,n,a,i,c){var s=this.resizeStaticMapDimensions(i,c),o=s.width,u=s.height,l={center:"".concat(e,",").concat(t),zoom:n,scale:2,size:"".concat(o,"x").concat(u),key:this.apiKey};a&&(l.style=this.convertThemeToStaticApiUrl(a));var p=new URLSearchParams;return Object.entries(l).forEach(function(e){var t=(0,r.default)(e,2),n=t[0],a=t[1];Array.isArray(a)?a.forEach(function(e){return p.append(n,e.toString())}):p.append(n,a.toString())}),"".concat("https://maps.googleapis.com/maps/api/staticmap","?").concat(p.toString())}},{key:"generateDigitallySignedStaticMapUrl",value:function(){var e=(0,n.default)(u.default.mark(function e(n){var a,i,c,s,o,l,h,f,y,v;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.srcWidth,i=n.srcHeight,c=n.theme,s=(0,t.default)(n,p),o=this.resizeStaticMapDimensions(a,i),l=o.width,h=o.height,f=d(d({},s),{},{size:"".concat(l,"x").concat(h)}),c&&(f.style=this.convertThemeToStaticApiUrl(c)),y=new URLSearchParams,Object.entries(f).forEach(function(e){var t=(0,r.default)(e,2),n=t[0],a=t[1];Array.isArray(a)?a.forEach(function(e){return y.append(n,e.toString())}):y.append(n,a.toString())}),v=y.toString(),e.prev=7,e.next=10,this.getMapApiSignedUrl(v);case 10:return e.abrupt("return",e.sent);case 13:return e.prev=13,e.t0=e.catch(7),console.error(e.t0),e.abrupt("return","");case 17:case"end":return e.stop()}},e,this,[[7,13]])}));return function(t){return e.apply(this,arguments)}}()}])}(l.BaseController);
},{"@babel/runtime/helpers/defineProperty":"cQfh","@babel/runtime/helpers/objectWithoutProperties":"lfm6","@babel/runtime/helpers/slicedToArray":"DERy","@babel/runtime/helpers/asyncToGenerator":"gIqS","@babel/runtime/helpers/classCallCheck":"IC7x","@babel/runtime/helpers/createClass":"WiqS","@babel/runtime/helpers/possibleConstructorReturn":"oXYo","@babel/runtime/helpers/getPrototypeOf":"goD2","@babel/runtime/helpers/inherits":"RISo","@babel/runtime/regenerator":"BxGn","./base":"dIju"}],"KwLP":[function(require,module,exports) {
var r=require("./arrayLikeToArray.js");function e(e){if(Array.isArray(e))return r(e)}module.exports=e,module.exports.__esModule=!0,module.exports.default=module.exports;
},{"./arrayLikeToArray.js":"jEQo"}],"U0SN":[function(require,module,exports) {
function e(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}module.exports=e,module.exports.__esModule=!0,module.exports.default=module.exports;
},{}],"o1nV":[function(require,module,exports) {
function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=e,module.exports.__esModule=!0,module.exports.default=module.exports;
},{}],"DJfw":[function(require,module,exports) {
var e=require("./arrayWithoutHoles.js"),r=require("./iterableToArray.js"),o=require("./unsupportedIterableToArray.js"),u=require("./nonIterableSpread.js");function t(t){return e(t)||r(t)||o(t)||u()}module.exports=t,module.exports.__esModule=!0,module.exports.default=module.exports;
},{"./arrayWithoutHoles.js":"KwLP","./iterableToArray.js":"U0SN","./unsupportedIterableToArray.js":"Dbv9","./nonIterableSpread.js":"o1nV"}],"Igw1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PaginationController=void 0;var e=u(require("@babel/runtime/helpers/toConsumableArray")),t=u(require("@babel/runtime/helpers/typeof")),a=u(require("@babel/runtime/helpers/classCallCheck")),r=u(require("@babel/runtime/helpers/createClass")),n=u(require("@babel/runtime/helpers/possibleConstructorReturn")),o=u(require("@babel/runtime/helpers/getPrototypeOf")),i=u(require("@babel/runtime/helpers/inherits")),l=require("./base"),c=require("../utils/navigation");function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t,a){return t=(0,o.default)(t),(0,n.default)(e,f()?Reflect.construct(t,a||[],(0,o.default)(e).constructor):t.apply(e,a))}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(f=function(){return!!e})()}var h=exports.PaginationController=function(n){function o(e,t,r,n){var i;return(0,a.default)(this,o),(i=s(this,o,[e,t,r,n])).config=e,i.window=t,i.document=r,i.$=n,i}return(0,i.default)(o,n),(0,r.default)(o,[{key:"destroy",value:function(){}},{key:"updateQueryString",value:function(e,a,r){r||(r=this.window.location.href);var n=new RegExp("([?&])".concat(e,"=.*?(&|#|$)(.*)"),"gi");if(n.test(r)){if(null!=a)return r.replace(n,"$1".concat(e,"=").concat("object"===(0,t.default)(a)?this.serializeObj(a):encodeURIComponent(a),"$2$3"));var o=r.split("#");return r=o[0].replace(n,"$1$3").replace(/(&|\?)$/,""),void 0!==o[1]&&null!==o[1]&&(r+="#".concat(o[1])),r}if(null!=a){var i=-1!==r.indexOf("?")?"&":"?",l=r.split("#");if(Array.isArray(a)){if(!a.length)return r;r="".concat(l[0]).concat(i).concat(this.serializeArray(e,a))}else r="object"===(0,t.default)(a)?"".concat(l[0]).concat(i).concat(this.serializeObj(a,"",e)):"".concat(l[0]).concat(i).concat(e,"=").concat(encodeURIComponent(a));return void 0!==l[1]&&null!==l[1]&&(r+="#".concat(l[1])),r}return r}},{key:"getParameterByName",value:function(e,t){t||(t=this.window.location.href),e=e.replace(/[[\]]/g,"\\$&");var a=new RegExp("[?&]".concat(e,"(=([^&#]*)|&|#|$)")),r=Array.from(RegExp.prototype[Symbol.matchAll].call(a,t)).flat();if(!r.length){var n=new RegExp("[?&]".concat(e,"(\\[.*?\\])=(.*?)(?=&|#|$)"),"g");return r=Array.from(RegExp.prototype[Symbol.matchAll].call(n,t)).flat(),this._parseParamToObject(r,"advancedFilters"===e)}return r.length>3?r.reduce(function(e,t,a){return(a+1)%3==0&&e.push(decodeURIComponent(t.replace(/\+/g," "))),e},[]):r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):""}},{key:"makePageKey",value:function(e){return e.replace("section-","").replace(/-/g,"")}},{key:"makeParamKey",value:function(e,t){return e.global?e.urlKey:"".concat(t,"-").concat(e.urlKey)}},{key:"deserializeParams",value:function(e,t){var a=this,r={},n=this.makePageKey(t),o=this.getParameterByName(n);return o&&(r.page=parseInt(o)),Array.isArray(e)&&e.forEach(function(e){var t=a.makeParamKey(e,n),o=a.getParameterByName(t);"int"===e.type?(o=parseInt(o),isFinite(o)||(o=null)):"bool"!==e.type&&"boolean"!==e.type||(o="true"===o||"false"!==o&&null),r[e.formKey||e.param]=o}),r}},{key:"serializeParams",value:function(e,t,a){var r=this,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3]?this.window.location.href.split("?")[0]:this.window.location.href,o=this.makePageKey(t);return n=this.updateQueryString(o,a.page,n),Array.isArray(e)&&e.forEach(function(e){var t=r.makeParamKey(e,o);n=r.updateQueryString(t,a[e.formKey||e.param],n)}),n}},{key:"formatSliderAtom",value:function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"")+(Number.isInteger(e)?e:e.toFixed(2))}},{key:"formatSliderValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e<1e3?this.formatSliderAtom(e,t):e<1e6?"".concat(this.formatSliderAtom(e/1e3,t)).concat(a,"K"):"".concat(this.formatSliderAtom(e/1e6,t)).concat(a,"M")}},{key:"formatSliderPriceRange",value:function(e,t,a,r){return t.min===e&&0!==e?"".concat(r.lowPrefix).concat(this.formatSliderValue(e,a," ")):t.max===e?"".concat(this.formatSliderValue(e,a," ")).concat(r.highSuffix):"".concat(this.formatSliderValue(e,a," "))}},{key:"formatSliderAreaRange",value:function(e,t,a,r){return t.min===e&&0!==e?"".concat(r.lowPrefix).concat(this.formatSliderValue(e)," ").concat(a):t.max===e?"".concat(this.formatSliderValue(e)).concat(r.highSuffix," ").concat(a):"".concat(this.formatSliderValue(e)," ").concat(a)}},{key:"getSearchFormValues",value:function(e){var t=e.queryElement,a=e.priceSliderElement,r=e.areaSliderElement,n=e.neighborhoodSelect,o={};if(t&&t.length&&(o.search=t.val()?t.val():null),a&&a.length){var i=a.val().split(";"),l=parseInt(a.attr("data-min")),c=parseInt(a.attr("data-max")),u=parseInt(i[0]),s=parseInt(i[1]);o.priceMin=u!==l?u:null,o.priceMax=s!==c?s:null}if(r&&r.length){var f=r.val().split(";"),h=parseInt(r.attr("data-min")),p=parseInt(r.attr("data-max")),d=parseInt(f[0]),m=parseInt(f[1]);o.areaMin=d!==h?d:null,o.areaMax=m!==p?m:null}return n&&n.length&&(o.neighborhoodId=n.val()?n.val():null),o}},{key:"serializeObj",value:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=[];for(var o in e)if(e.hasOwnProperty(o)){var i=e[o],l=void 0;if(r){var c=a?"[".concat(a,"][").concat(o,"]"):"[".concat(o,"]");l="".concat(r).concat(c)}else l=a?"".concat(a,"[").concat(o,"]"):o;null!==i&&Array.isArray(i)?i.length&&n.push(this.serializeArray(l,i)):null!==i&&"object"===(0,t.default)(i)?n.push(this.serializeObj(i,l)):n.push("".concat(l,"=").concat(encodeURIComponent(i)))}return n.join("&")}},{key:"serializeArray",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=[];return t.forEach(function(t){var n=a?"".concat(a).concat(e):e;r.push("".concat(n,"=").concat(encodeURIComponent(t)))}),r.join("&")}},{key:"_parseParamToObject",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e.length)return null;for(var a={},r=0;r<e.length;r++)if((r+1)%3==0){var n=decodeURIComponent(e[r].replace(/\+/g," ")),o=e[r-1];Object.assign(a,this._setObjectPath(o,n,a,t))}return a}},{key:"_setObjectPath",value:function(t,a,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=t.split(/[\[\]]/).filter(Boolean),i=["in","nin","btw","ciin","cinin"],l={},u=l,s=(0,c.loGet)(r,o.join("."));return o.forEach(function(t,l){l===o.length-1?u[t]=s?Array.isArray(s)?[].concat((0,e.default)(s),[a]):[s,a]:n&&i.includes(t)?[a]:a:(u[t]=r[t]?r[t]:{},u=u[t])}),l}}])}(l.BaseController);
},{"@babel/runtime/helpers/toConsumableArray":"DJfw","@babel/runtime/helpers/typeof":"xOn8","@babel/runtime/helpers/classCallCheck":"IC7x","@babel/runtime/helpers/createClass":"WiqS","@babel/runtime/helpers/possibleConstructorReturn":"oXYo","@babel/runtime/helpers/getPrototypeOf":"goD2","@babel/runtime/helpers/inherits":"RISo","./base":"dIju","../utils/navigation":"DEGM"}],"txJo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ExpandSliderController=void 0;var e=n(require("@babel/runtime/helpers/classCallCheck")),t=n(require("@babel/runtime/helpers/createClass")),l=n(require("@babel/runtime/helpers/possibleConstructorReturn")),i=n(require("@babel/runtime/helpers/getPrototypeOf")),r=n(require("@babel/runtime/helpers/inherits")),o=require("./base");function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){return t=(0,i.default)(t),(0,l.default)(e,s()?Reflect.construct(t,r||[],(0,i.default)(e).constructor):t.apply(e,r))}function s(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(s=function(){return!!e})()}var c=exports.ExpandSliderController=function(l){function i(t,l,r,o){var n;return(0,e.default)(this,i),(n=a(this,i,[t,l,r,o])).config=t,n.window=l,n.document=r,n.$=o,n._createLightbox=n._createLightbox.bind(n),n.expandSliders=[],n}return(0,r.default)(i,l),(0,t.default)(i,[{key:"initialize",value:function(){var e=this;arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{var t=(0,this.$)(".has-mobile-expand");t.each(function(t,l){e._addExpandButton(l)}),this.expandSliders=this.expandSliders.concat(t)}catch(l){console.log(l)}}},{key:"destroy",value:function(){(0,this.$)(".lp-expand-btn, .lp-expand-btn-wrapper").remove(),this.expandSliders=[]}},{key:"_addExpandButton",value:function(e){var t=this.$,l=t(e),i=l.closest("section[id]"),r=l.data("append"),o=i.find(".lp-expand-btn");o.length||(o=t('<button class="lp-expand-btn" aria-label="Open a lightbox"><span class="lp-i lp-i--expand-alt" aria-hidden="true"></span></button>'),r?i.find(r).append(o):l.after(o.wrap('<div class="lp-expand-btn-wrapper" style="position: relative"></div>').parent())),o.on("click",{slider:e,$section:i},this._createLightbox)}},{key:"_createLightbox",value:function(e){var t=this.window,l=this.document,i=this.$,r=e.data.slider,o=e.data.$section,n="lightbox-for-".concat(o.attr("id")),a=i("<div id=".concat(n,' class="lp-lightbox">\n        <button class="lp-lightbox__close" aria-label="close modal"></button>\n        <div class="lp-lightbox__content">\n        <div class="lp-lightbox__carousel">\n        </div>\n        </div>\n        </div>')),s={arrows:!0,dots:!1,infinite:!0,draggable:!0,prevArrow:'<button type="button" class="lp-lightbox-arrow--prev lp-lightbox-arrow" aria-label="Previous"></button>',nextArrow:'<button type="button" class="lp-lightbox-arrow--next lp-lightbox-arrow" aria-label="Next"></button>'};"function"==typeof t.lpUI.requestScrollLock?t.lpUI.requestScrollLock(n):l.body.style.overflow="hidden",i("body").append(a);var c=a.find(".lp-lightbox__carousel");a.addClass("show");var d=r.slick?r.slick.currentSlide:0;s.initialSlide=d||0,(r.slick?r.slick.$slides.find("img"):i(r).find("img")).each(function(){i(".lp-lightbox__carousel").append(i(this).clone(!1).removeAttr("style").wrap('<div class="lp-lightbox__slide"></div>').parent())}),c.slick(s),a.on("click",".lp-lightbox__close",function(){var e=c.slick("slickCurrentSlide");a.removeClass("show"),c.slick("unslick"),r.slick&&i(r).slick("slickGoTo",e),"function"==typeof t.lpUI.releaseScrollLock?t.lpUI.releaseScrollLock(n):l.body.style.overflow="",a.remove()})}}])}(o.BaseController);
},{"@babel/runtime/helpers/classCallCheck":"IC7x","@babel/runtime/helpers/createClass":"WiqS","@babel/runtime/helpers/possibleConstructorReturn":"oXYo","@babel/runtime/helpers/getPrototypeOf":"goD2","@babel/runtime/helpers/inherits":"RISo","./base":"dIju"}],"mZMu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DivolteController=void 0;var e=a(require("@babel/runtime/helpers/slicedToArray")),t=a(require("@babel/runtime/helpers/classCallCheck")),i=a(require("@babel/runtime/helpers/createClass")),n=a(require("@babel/runtime/helpers/possibleConstructorReturn")),o=a(require("@babel/runtime/helpers/getPrototypeOf")),r=a(require("@babel/runtime/helpers/inherits")),l=require("./base");function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t,i){return t=(0,o.default)(t),(0,n.default)(e,s()?Reflect.construct(t,i||[],(0,o.default)(e).constructor):t.apply(e,i))}function s(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(s=function(){return!!e})()}var c=exports.DivolteController=function(n){function o(e,i,n,r){var l;return(0,t.default)(this,o),(l=u(this,o,[e,i,n,r])).config=e,l.window=i,l.document=n,l.$=r,l}return(0,r.default)(o,n),(0,i.default)(o,[{key:"destroy",value:function(){this.window.divolte||(this.window.divolteLp=function(){(this.window.divolteLp.q=this.window.divolteLp.q||[]).push(arguments)})}},{key:"initialize",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.config.divolteServiceUrl&&!this.window.divolte&&this.loadScript()}},{key:"loadScript",value:function(){var e=this.config.divolteServiceUrl,t=this.document.createElement("script");t.type="text/javascript",t.defer=!0,t.async=!0,t.src="".concat(e,"/divolte.js"),this.document.head.appendChild(t),t.addEventListener("load",this.executeQueue.bind(this))}},{key:"executeQueue",value:function(){var t=this;(this.window.divolteLp.q||[]).forEach(function(i){var n=(0,e.default)(i,2),o=n[0],r=n[1];t[o](r)}),this.window.divolteLp=this.divolteLp.bind(this)}},{key:"divolteLp",value:function(e,t){try{this[e](t)}catch(i){console.log(i)}}},{key:"sendLpEvent",value:function(e,t){if(e.includes("pageView")){var i=this.config,n={companyId:i.companyId,templateId:i.templateId,websiteId:i.websiteId,pageId:i.pageId,pageMeta:i.pageMeta};this.window.divolte.signal(e,Object.assign(n,t))}else console.log("".concat(e," IS NOT SUPPORTED"))}},{key:"sendLpPageView",value:function(){this.sendLpEvent("pageView",{})}}])}(l.BaseController);
},{"@babel/runtime/helpers/slicedToArray":"DERy","@babel/runtime/helpers/classCallCheck":"IC7x","@babel/runtime/helpers/createClass":"WiqS","@babel/runtime/helpers/possibleConstructorReturn":"oXYo","@babel/runtime/helpers/getPrototypeOf":"goD2","@babel/runtime/helpers/inherits":"RISo","./base":"dIju"}],"B1Y1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.OAuthController=void 0;var e=o(require("@babel/runtime/helpers/classCallCheck")),t=o(require("@babel/runtime/helpers/createClass")),a=o(require("@babel/runtime/helpers/possibleConstructorReturn")),n=o(require("@babel/runtime/helpers/getPrototypeOf")),i=o(require("@babel/runtime/helpers/inherits")),s=require("./base");function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,i){return t=(0,n.default)(t),(0,a.default)(e,c()?Reflect.construct(t,i||[],(0,n.default)(e).constructor):t.apply(e,i))}function c(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(c=function(){return!!e})()}var l="oauthSuccess",u=exports.OAuthController=function(a){function n(t,a,i,s){var o;return(0,e.default)(this,n),(o=r(this,n,[t,a,i,s])).config=t,o.window=a,o.document=i,o.successListeners=[],o._listenToMessages=o._listenToMessages.bind(o),o._listenToOneTapMessage=o._listenToOneTapMessage.bind(o),o}return(0,i.default)(n,a),(0,t.default)(n,[{key:"initialize",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{t.googleSignOnEnabled&&!t.iframe&&this._renderGoogleOneTap(),this.document.querySelectorAll('div[data-signin-type="google-sign-in"]').forEach(function(t){return e._convertGoogleSignIn(t)}),this.document.querySelectorAll('div[data-signin-type="facebook-sign-in"]').forEach(function(t){return e._convertFacebookSignIn(t)})}catch(a){console.log(a)}}},{key:"destroy",value:function(){var e=this;this.successListeners.forEach(function(t){e.window.removeEventListener("message",e._listenToMessages),e.window.removeEventListener(l,e.window[t])})}},{key:"_renderGoogleOneTap",value:function(){var e=this.document.createElement("div");google.accounts.id.initializeIntermediate({src:this._buildUrlAndCopyAttributes(e,e,"googleOneTap")}),this.window.addEventListener("message",this._listenToOneTapMessage)}},{key:"_listenToOneTapMessage",value:function(e){var t="show_intermediate_iframe",a="hide_intermediate_iframe",n=e.data,i=n.type,s=n.height;if(i===t||i===a){var o=this.document.getElementById("onetap_google_intermediate_iframe");o&&(o.style.height=s,o.style.display=i===t?"unset":"none")}}},{key:"_convertGoogleSignIn",value:function(e){this._replaceWithIframe("googleSignIn",e)}},{key:"_convertFacebookSignIn",value:function(e){this._replaceWithIframe("facebookSignIn",e)}},{key:"_replaceWithIframe",value:function(e,t){this._attachSuccessCallback(t);var a=this.document.createElement("iframe");a.src=this._buildUrlAndCopyAttributes(t,a,e),a.dataset.isSocialOauthButton=!0,t.replaceWith(a)}},{key:"_listenToMessages",value:function(e){var t=this,a=this.config.buyerSellerServiceUrl;if(e.origin===a&&"success"===e.data.event){var n=new Event(l);this.window.dispatchEvent(n),this.successListeners.forEach(function(e){t.window[e]?t.window[e](n):console.error("Callback function ".concat(e," not found on window object"))}),this.document.documentElement.classList.add("is-login-success")}}},{key:"_attachSuccessCallback",value:function(e){this.window.addEventListener("message",this._listenToMessages);var t=e.dataset.onSuccessFunctionName;t&&this.successListeners.push(t)}},{key:"_buildUrlAndCopyAttributes",value:function(e,t,a){var n=this.config,i=n.buyerSellerServiceUrl,s=n.companyId,o=n.websiteId,r=n.pageId,c=n.pageMeta,l=this.window.location,u=l.origin+l.pathname,d=new URL("".concat(i,"/buttons/").concat(a)),h=this.window.localStorage.getItem("utm_vars");d.searchParams.append("companyId",s),d.searchParams.append("websiteId",o),d.searchParams.append("pageId",r),d.searchParams.append("sourceUrl",u),d.searchParams.append("pageMeta",JSON.stringify(c)),h&&d.searchParams.append("utm",h);var g=["data-size","data-width","data-text","data-button-type","data-shape","data-layout","data-max-rows","data-use-continue-as","data-type","data-theme","data-logo_alignment","data-locale"];return Array.from(e.attributes).forEach(function(e){g.includes(e.nodeName)?d.searchParams.append(e.nodeName,e.nodeValue):t.setAttribute("id"===e.nodeName?"data-id":e.nodeName,e.nodeValue)}),d.toString()}}])}(s.BaseController);
},{"@babel/runtime/helpers/classCallCheck":"IC7x","@babel/runtime/helpers/createClass":"WiqS","@babel/runtime/helpers/possibleConstructorReturn":"oXYo","@babel/runtime/helpers/getPrototypeOf":"goD2","@babel/runtime/helpers/inherits":"RISo","./base":"dIju"}],"nM9j":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.validationController=exports.paginationController=exports.oauthController=exports.modalController=exports.mapApiLoaderController=exports.expandSliderController=exports.divolteController=exports.contactFormController=exports.configController=exports.buttonController=void 0;var o=require("./config"),r=require("./modals"),e=require("./buttons"),n=require("./validation"),t=require("./contactForms"),l=require("./mapApiLoader"),i=require("./pagination"),d=require("./expandSlider"),w=require("./divolte"),a=require("./oauth"),p=exports.configController=new o.ConfigController({}),C=exports.modalController=new r.ModalController(p,window,document,window.$),u=exports.buttonController=new e.ButtonController(p,window,document,window.$),s=exports.validationController=new n.ValidationController(p,window,document,window.$),x=exports.contactFormController=new t.ContactFormController(p,window,document,window.$),c=exports.mapApiLoaderController=new l.MapApiLoaderController(p,window,document,window.$),m=exports.paginationController=new i.PaginationController(p,window,document,window.$),q=exports.expandSliderController=new d.ExpandSliderController(p,window,document,window.$),v=exports.divolteController=new w.DivolteController(p,window,document,window.$),$=exports.oauthController=new a.OAuthController(p,window,document,window.$);
},{"./config":"EtW1","./modals":"Y3TA","./buttons":"kToa","./validation":"a3AZ","./contactForms":"kqOT","./mapApiLoader":"auLy","./pagination":"Igw1","./expandSlider":"txJo","./divolte":"mZMu","./oauth":"B1Y1"}],"Focm":[function(require,module,exports) {
"use strict";var r=o(require("../../utils/HandlebarsHelpersFactory")),e=require("./controllers");function o(r){return r&&r.__esModule?r:{default:r}}function n(r,e){if(window.luxuryPresence[r])try{window.luxuryPresence[r].destroy()}catch(o){console.log(o)}window.luxuryPresence[r]=e}n("config",e.configController),n("modals",e.modalController),n("buttons",e.buttonController),n("validation",e.validationController),n("contactForms",e.contactFormController),n("mapApiLoader",e.mapApiLoaderController),n("pagination",e.paginationController),n("expandSliders",e.expandSliderController),n("divolte",e.divolteController),n("oauth",e.oauthController),window.luxuryPresence.formatSliderPriceRange=e.paginationController.formatSliderPriceRange.bind(e.paginationController),window.luxuryPresence.formatSliderAreaRange=e.paginationController.formatSliderAreaRange.bind(e.paginationController),window.luxuryPresence.getSearchFormValues=e.paginationController.getSearchFormValues.bind(e.paginationController),window.luxuryPresence.handlebarsHelpersFactory=function(e){return(0,r.default)(e,{isEqual:function(r,e){return r==e}})};
},{"../../utils/HandlebarsHelpersFactory":"KEHU","./controllers":"nM9j"}]},{},["Focm"], null)
//# sourceMappingURL=/lp-sdk.js.map
 



 
        var lpGlobalInitialized = false;

        function lpGlobalInit () {
          if (lpGlobalInitialized) {
            return;
          }
            lpGlobalInitialized = true;
                  // Initialize wow animation plugin only according to turbolinks
                  var wow = new WOW({
                  animateClass: 'animated',
                  offset: wowOffset,
                  live: false,
                  callback: function(box) {
                }
                });
                  // Initialize handlebar helpers only once
                  function handlebarsInit() {
                  if (!window.Handlebars) {
                  return;
                }
                  HandlebarsIntl.registerWith(Handlebars);
                  Handlebars.registerHelper(window.luxuryPresence.handlebarsHelpersFactory(Handlebars));
                }

                handlebarsInit();


            /* Initialize Luxury Presence SDK */
            try {
                window.luxuryPresence.config.setCompany("4aedd857-cd18-4f4b-bf1c-3f9a6795fef1", {});
                window.luxuryPresence.config.setWebsite("53a2ebea-d2a5-432a-a342-fdbfed1eadd6", {
                    recaptchaSiteId: "",
                    leadIngesterEnabled: true
                });
                window.luxuryPresence.config.setPage("80e8d1f2-41b1-4d6d-8363-4c7b8f664033", {
                    sourceResource: "",
                    pageElementId: "",
                    pageQueryVariables: {},
                });
                window.luxuryPresence.config.setWebsiteApiGatewayUrl("https://wgw.luxurypresence.com", {});
                window.luxuryPresence.config.setBuyerSellerServiceUrl("https://bss.luxurypresence.com", {});
                  window.luxuryPresence.config.setDivolteServiceUrl("https://t.luxurypresence.com", {});
                window.luxuryPresence.config.setTemplateId("dbfbedc7-c7e2-4812-86ee-0ee198862c21", {});
                window.luxuryPresence.config.setLeadIngesterUrl("https://leads.luxurypresence.com", {});
                window.luxuryPresence.buttons.initialize({});
                window.luxuryPresence.contactForms.initialize({});
                window.luxuryPresence.expandSliders.initialize({});
                window.luxuryPresence.oauth.initialize({ googleSignOnEnabled: false, iframe: false });
                  window.luxuryPresence.divolte.initialize({});
            } catch (e) {
                console.log(e);
            }

            /* Inject Section Specific Javascript */
                try {
(function init(sectionDomId) {
  const form = $("#" + sectionDomId).find("form");
  const redirectLink = $('#' + sectionDomId + ' .redirect-link');
  form.on("reset", function () {
    redirectPage(redirectLink);
  });
  function redirectPage(link) {
    if (link.length) {
      const rawHref = link.attr('href');
      link.attr('href', setHttp(rawHref));
      link[0].click();
    }
  }
  function setHttp(link) {
    if (link.search(/^http[s]?\:\/\/|\//) == -1) {
      link = 'http://' + link;
    }
    return link;
  }
})('modal-global-contact-us');
} catch(e) {
console.log(e);
}
                
                try {
(function init(sectionDomId) {
  const $section = $('#' + sectionDomId);
  const $hamburger = $section.find('.hamburger-component');
  function onSideMenuShow() {
    if (!$hamburger.hasClass('active')) {
      $hamburger.addClass('active');
    }
  }
  function onSideMenuHide() {
    $hamburger.removeClass('active');
  }
  const $window = $(window);
  $window.on('lpui-sidemenu-show.lpui-auto-clean', onSideMenuShow);
  $window.on('lpui-sidemenu-hide.lpui-auto-clean', onSideMenuHide);
  const $subContainers = $section.find('.navigation__item.sub-nav-container');
  $subContainers.hover(function () {
    $(this).find('.sub-nav').addClass('visible');
  }, function () {
    $(this).find('.sub-nav').removeClass('visible');
  });
  $window.on('click.lpui-auto-clean', function () {
    $('.sub-nav-container.visible-dropdown').removeClass('visible-dropdown');
  });
  let fixedWidth = 0;
  const rightPad = 20;
  function fixSubsPosition() {
    const wWidth = window.innerWidth;
    if (innerWidth === fixedWidth) {
      return;
    }
    fixedWidth = wWidth;
    $subContainers.each(function () {
      const $sub = $(this).find('.sub-nav');
      $sub[0].style.right = '';
      const sRect = $sub[0].getBoundingClientRect();
      const sRight = sRect.left + sRect.width;
      if (sRight > wWidth - rightPad) {
        const parentRect = $sub[0].offsetParent.getBoundingClientRect();
        const parentRight = parentRect.left + parentRect.width;
        $sub[0].style.right = `${parentRight - wWidth + rightPad}px`;
      }
    });
  }
  var debouncer;
  $window.on('resize.lpui-auto-clean', function () {
    clearTimeout(debouncer);
    debouncer = setTimeout(fixSubsPosition, 500);
  });
  fixSubsPosition();
  if ($('.property-intro').length || $('.property-intro-2').length) {
    $('nav').addClass('dark-opening');
    $("#global-navbar").css({
      "background-color": "rgb(26, 26, 26)",
      "color": "rgb(255, 255, 255)"
    });
  }
})('global-navbar');
} catch(e) {
console.log(e);
}
                try {
(function init(sectionDomId, options) {
  var elementSelector = options.elementSelector || 'nav';
  var element = document.querySelector(elementSelector);
  var sections = document.querySelectorAll('body > section');
  var subNavContainers = element.querySelectorAll('.sub-nav');
  var initialBackgroundColor = options.initialBackgroundColor || element.style.backgroundColor;
  var backgroundColorScroll = options.backgroundColorScroll || '#191919';
  var fontColor = options.fontColor || '#fff';
  var fontColorScroll = options.fontColorScroll || '#000';
  var didScroll = false;
  var lastScrollTop = 0;
  var delta = 5;

  // eslint-disable-next-line sonarjs/no-collapsible-if
  if (wow) {
    // Wowjs might not trigger for position fixed elements
    if (window.scrollY > 0) {
      element.querySelectorAll('.wow').forEach(el => wow.show(el));
    }
  }
  function adjustNavPinState() {
    // Remove 'visible' class from all subNavContainers
    for (let i = 0; i < subNavContainers.length; i++) {
      subNavContainers[i].classList.remove('visible');
    }
    if (window.scrollY > 0) {
      element.style.backgroundColor = backgroundColorScroll;
      element.style.color = fontColorScroll;
      element.classList.add('scroll');
    } else {
      element.style.backgroundColor = initialBackgroundColor;
      element.style.color = fontColor;
      element.classList.remove('scroll');
    }
  }
  adjustNavPinState();
  function onScroll() {
    didScroll = true;
  }
  window.addEventListener('scroll', onScroll);

  // eslint-disable-next-line
  var debounceInterval = setInterval(() => {
    if (didScroll) {
      // eslint-disable-next-line
      hasScrolled();
      didScroll = false;
    }
  }, 250);
  function hasScrolled() {
    adjustNavPinState();
    // eslint-disable-next-line
    var navbarHeight = element.offsetHeight;
    // eslint-disable-next-line
    var st = window.scrollY;

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) {
      return;
    }
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      element.style.transform = `translateY(-${navbarHeight}px) scaleY(0)`;
      document.documentElement.style.setProperty('--global-header-height', '0px');

      // Some sections "follow" the navbar with class sticky (i.e. Producer search)
      sections.forEach(section => {
        if (section.classList.contains('sticky')) {
          section.style.top = '0px';
        }
      });
    } else {
      // Scroll Up
      // eslint-disable-next-line
      if (st + window.innerHeight < document.documentElement.scrollHeight) {
        element.style.transform = `translateY(0) scaleY(1)`;
        document.documentElement.style.setProperty('--global-header-height', `${navbarHeight}px`);
        sections.forEach(section => {
          if (section.classList.contains('sticky')) {
            section.style.top = `${navbarHeight}px`;
          }
        });
      }
    }
    lastScrollTop = st;
  }
})('NAVBAR', JSON.parse("{\"fontColor\":\"#fff\",\"elementSelector\":\"nav\",\"fontColorScroll\":\"#fff\",\"initialFontColor\":\"#fff\",\"backgroundColorScroll\":\"#1a1a1a\",\"initialBackgroundColor\":\"rgba(0,0,0,0)\"}"));
} catch(e) {
console.log(e);
}
                try {
(function init(sectionDomId) {
  var $sidemenu = $('#' + sectionDomId);
  var shown = false;
  function onShow() {
    if (shown) {
      return;
    }
    shown = true;
    window.lpUI.requestScrollLock(sectionDomId);
  }
  function onHide(ev, opts) {
    if (!shown) {
      return;
    }
    shown = false;
    window.lpUI.releaseScrollLock(sectionDomId);
    $('body').removeClass('locked');
    opts = ev.detail || opts;
    if (!opts || !opts.instant) {
      $sidemenu.addClass("is-hiding");
      setTimeout(function () {
        $sidemenu.removeClass("is-hiding");
      }, 300);
    }
  }
  $sidemenu.on('lpui-show', onShow);
  $(window).on('lpui-sidemenu-hide.lpui-auto-clean', onHide);
  $sidemenu.removeClass("is-hiding");
})('global-sidemenu');
} catch(e) {
console.log(e);
}
                
                try {
(function init(sectionDomId) {
  function getNums(str) {
    return str.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
  }
  function getLightness(rgbaString) {
    let r = getNums(rgbaString)[1];
    let g = getNums(rgbaString)[2];
    let b = getNums(rgbaString)[3];
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      l = 0;
    l = (cmax + cmin) / 2;
    l = +(l * 100).toFixed(1);
    return l;
  }
  const $footer = $('.footer');
  let footerBackgroundColor = $('footer').css('background-color');
  if (getLightness(footerBackgroundColor) >= 50) {
    $footer.addClass('light');
  } else {
    $footer.addClass('dark');
  }
  var $footerWrap = $('.footer').closest("footer");
  if ($footerWrap.length === 0) {
    $footerWrap = $('.footer').closest("body");
  }
  var footerWrapBackgroundColor = $footerWrap.css('background-color');
  var footerColor = $footerWrap.css('color');
  $footerWrap.css({
    "--fontColor": footerColor,
    "--bgColor": footerWrapBackgroundColor
  });
  const form = $("#" + sectionDomId).find("form");
  const redirectLink = $('#' + sectionDomId + ' .redirect-link');
  form.on("reset", function () {
    redirectPage(redirectLink);
  });
  function redirectPage(link) {
    if (link.length) {
      const rawHref = link.attr('href');
      link.attr('href', setHttp(rawHref));
      link[0].click();
    }
  }
  function setHttp(link) {
    if (link.search(/^http[s]?\:\/\/|\//) == -1) {
      link = 'http://' + link;
    }
    return link;
  }
})('global-footer');
} catch(e) {
console.log(e);
}
                
                try {
(function init(options) {})('global-mobile-contact');
} catch(e) {
console.log(e);
}
                
                try {
(function init(sectionDomId) {})('modal-global-subscribe');
} catch(e) {
console.log(e);
}
                
                try {
(function init(sectionDomId) {
  window.luxuryPresence.mapApiLoader.load().then(() => {
    const section = $(`#${sectionDomId}`);
    const searchBar = section.find('.search-bar');
    const searchResultContainer = section.find('.search-result-container');
    const searchInput = section.find('input.search-input');
    const searchResultsCard = section.find('.address-results');
    const addressSearchCard = section.find('.address-search');
    const neighborhoodSearchCard = section.find('.neighborhood-search');
    const areaSearchCard = section.find('.area-search');
    const service = new google.maps.places.AutocompleteService();
    const geocoder = new google.maps.Geocoder();
    const bounds = new google.maps.LatLngBounds();
    const nonStickySearchTop = searchBar.offset().top;
    const heightLimited = section.find('.height-limited');
    const staticHeader = $('.static-header');
    const rightBtn = section.find('.contact-section');
    function sticktothetop() {
      const top = staticHeader.length == 1 ? staticHeader[0].getBoundingClientRect().height : 0;
      const windowTop = $(window).scrollTop();
      const diff = nonStickySearchTop - windowTop;
      if (diff < top) {
        section.addClass('sticky');
        searchResultContainer.addClass('at-bottom');
        if (staticHeader.length == 1) {
          section[0].style.top = top + 'px';
        }
      } else {
        section.removeClass('sticky');
        section.addClass('test');
        section[0].style.top = '';
        if (diff > 300 + top) {
          searchResultContainer.removeClass('at-bottom');
          heightLimited.css('max-height', diff - 50 + 'px');
        } else {
          heightLimited.css('max-height', '');
          searchResultContainer.addClass('at-bottom');
        }
      }
    }
    $(window).on('scroll.lpui-auto-clean', function () {
      sticktothetop();
    });
    sticktothetop();
    var searchOpened = false;
    function showResults(show) {
      if (show) {
        searchResultContainer.css({
          display: ''
        });
        section.addClass('opened');
        searchOpened = true;
        setTimeout(() => {
          searchResultContainer.addClass('show');
        }, 1);
      } else {
        searchResultContainer.removeClass('show');
        section.removeClass('opened');
        searchOpened = false;
      }
    }
    $(document.body).on('click', function (e) {
      if (searchBar.find($(e.target)).length > 0 || heightLimited.find($(e.target)).length > 0) {
        return;
      }
      showResults(false);
      if (searchOpened) {
        return false;
      }
    });
    rightBtn.on('click', function () {
      showResults(false);
    });
    function resolveGeoBounds(placeId, description) {
      return new Promise(function (resolve, reject) {
        geocoder.geocode({
          'placeId': placeId
        }, function (results, status) {
          if (status != 'OK') {
            return reject(status);
          }
          var result = results[0];
          var bounds = new google.maps.LatLngBounds();
          bounds.extend(result.geometry.viewport.getSouthWest());
          bounds.extend(result.geometry.viewport.getNorthEast());
          result.geometry.bounds = bounds.toJSON();
          var placeUrl = window.luxuryPresence.makeMlsLink(result);
          return resolve({
            placeUrl: placeUrl,
            description: description
          });
        });
      });
    }
    function placesResults(keyword) {
      var request = {
        input: keyword,
        componentRestrictions: {
          country: 'us'
        },
        types: ['(regions)'],
        limit: 1
      };
      return new Promise(function (resolve, reject) {
        service.getPlacePredictions(request, function (results, status) {
          if (keyword === lastKeyword && status === google.maps.places.PlacesServiceStatus.OK) {
            var geoResultPromises = results.map(function (result) {
              return resolveGeoBounds(result.place_id, result.description).catch(function () {
                return null;
              });
            });
            Promise.all(geoResultPromises).then(function (geoLinks) {
              return resolve(geoLinks.filter(function (a) {
                return a;
              }));
            });
          } else {
            return resolve([]);
          }
        });
      });
    }
    function lpResults(keyword) {
      return new Promise(function (resolve, reject) {
        window.luxuryPresence.getMLSAutocomplete(keyword).then(function (results) {
          return resolve(results);
        }).catch(function (e) {
          console.log(e.message);
          return resolve([]);
        });
      });
    }
    searchInput[0].onfocus = function (e) {
      if (searchInput[0].value) {
        searchResultsCard.show();
      } else {
        addressSearchCard.show();
      }
      showResults(true);
    };
    var lastKeyword = '';
    function doSearch() {
      var keyword = searchInput.val();
      lastKeyword = keyword;
      if (!keyword) {
        searchResultsCard.hide();
        addressSearchCard.show();
      } else {
        searchResultsCard.show();
        addressSearchCard.hide();
        const searches = [placesResults(keyword), lpResults(keyword)];
        Promise.all(searches).then(function (results) {
          if (keyword !== lastKeyword) {
            return;
          }
          const placesResults = results[0];
          const lpResults = results[1];
          var placesHtml = placesResults.reduce(function (acc, result) {
            acc += `<a class="result place-link" href="${result.placeUrl}">${result.description}</a>`;
            return acc;
          }, '');
          var listingsHtml = lpResults.reduce(function (acc, result) {
            acc += `<span class="result"><a href="/home-search/listings/${result.id}">${result.display_address}</a></span>`;
            return acc;
          }, '');
          var html = `<div class="result-container"><h6>Locations</h6><div>${placesHtml}</div></div><div class="result-container"><h6>Listings</h6><div><div>${listingsHtml}</div></div>`;
          searchResultsCard.html(html);
        });
      }
    }
    var debouncedSearch = window.luxuryPresence.debounce(doSearch, 400);
    searchInput[0].onkeyup = debouncedSearch;
  });
})('section-1137b51d-9bb6-4f30-b26d-5b2752eceedf', 'undefined');
} catch(e) {
console.log(e);
}
                try {
(function init(sectionDomId) {
  let section = $('#' + sectionDomId);
  let animationStarted = false;
  function getRupeesFormat(val) {
    while (/(\d+)(\d{3})/.test(val.toString())) {
      val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }
    return val;
  }
  function animateNums() {
    if (animationStarted) {
      return;
    }
    animationStarted = true;
    section.find('.stats__counter').each(function () {
      if (/\d/.test($(this).text().trim())) {
        let count = $(this).text().replace(',', '.').match(/\d+([,.])?\d*/)[0];
        const value = $(this).text().match(/\d+([,.])?\d*/)[0];
        $(this).html($(this).text().replace(value, `<span>${value}</span>`));
        let fractionalNumerals = 0;
        if (count.indexOf(".") > -1) {
          fractionalNumerals = count.slice(count.indexOf(".") + 1).length;
        }
        $(this).find("span").prop('Counter', 0).animate({
          Counter: parseFloat(value.replace(/,/g, ''))
        }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
            if (/,/g.test(value)) {
              $(this).text(getRupeesFormat(Math.ceil(now)));
            } else {
              let step = now.toFixed(fractionalNumerals);
              $(this).text(step);
            }
          }
        });
      }
    });
  }
  function calculateVisibility() {
    if ($(window).height() + $(window).scrollTop() >= section.offset().top) {
      animateNums();
    }
  }
  $(window).scroll(calculateVisibility);
  calculateVisibility();
})('section-a66ce640-9027-4c93-8b66-ae42cd5ec467', 'undefined');
} catch(e) {
console.log(e);
}
                try {
(function init(sectionDomId) {
  let section = $('#' + sectionDomId);
  let animationStarted = false;
  function getRupeesFormat(val) {
    while (/(\d+)(\d{3})/.test(val.toString())) {
      val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }
    return val;
  }
  function animateNums() {
    if (animationStarted) {
      return;
    }
    animationStarted = true;
    section.find('.stats__counter').each(function () {
      if (/\d/.test($(this).text().trim())) {
        let count = $(this).text().replace(',', '.').match(/\d+([,.])?\d*/)[0];
        const value = $(this).text().match(/\d+([,.])?\d*/)[0];
        $(this).html($(this).text().replace(value, `<span>${value}</span>`));
        let fractionalNumerals = 0;
        if (count.indexOf(".") > -1) {
          fractionalNumerals = count.slice(count.indexOf(".") + 1).length;
        }
        $(this).find("span").prop('Counter', 0).animate({
          Counter: parseFloat(value.replace(/,/g, ''))
        }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
            if (/,/g.test(value)) {
              $(this).text(getRupeesFormat(Math.ceil(now)));
            } else {
              let step = now.toFixed(fractionalNumerals);
              $(this).text(step);
            }
          }
        });
      }
    });
  }
  function calculateVisibility() {
    if ($(window).height() + $(window).scrollTop() >= section.offset().top) {
      animateNums();
    }
  }
  $(window).scroll(calculateVisibility);
  calculateVisibility();
})('section-3293f76e-b049-4fb8-94aa-f5bd1c98181b', 'undefined');
} catch(e) {
console.log(e);
}
                try {
(function init(sectionDomId) {
  const $section = $('#' + sectionDomId);
  if ($section.find('.parallax').length) $section.addClass('parallax-enabled');
  if ($section.find('.video-wrapper').length) $section.addClass('video');
})('section-f17a0c43-7028-4181-bc75-aafcefb27085', 'undefined');
} catch(e) {
console.log(e);
}

            var { body } = document;
            var globalNav = body.querySelector(':scope > nav');
            var globalSideMenu = body.querySelector(':scope > div.sidemenu');

            document.querySelectorAll('body > .modal .close').forEach(modalCloseBtn => {
                modalCloseBtn.addEventListener('click', function() {
                window.lpUI.hideClosestModal(modalCloseBtn);
              });
            });

            window.addEventListener('click', function() {
                document.querySelectorAll('.share-popup').forEach(sharedPopup => {
                    sharedPopup.style.display = 'none' ;
                });
            });

            /* Misc Partials / Addons */
            function initWOW() {
                wow.init();
                wow.scrollHandler();
                setTimeout(function () {
                    const wowHideStyle = document.getElementById('wow-hide-elements');
                    if(wowHideStyle) {
                        wowHideStyle.disabled = true;
                    }
                }, 1);
            }

            const wowHideElements =  document.getElementById('wow-hide-elements');
            if (wowHideElements) {
               wowHideElements.disabled = false;
            }

                initWOW();

            /* Generic Navbar Handling */
            globalNav?.querySelectorAll('.hamburger-component').forEach(hamburgerComponent => {
                hamburgerComponent.addEventListener('click', function() {
                window.lpUI.sideMenuToggle();
              });
            });
            globalSideMenu?.querySelectorAll('.toggle').forEach(toggleEl => {
                toggleEl.addEventListener('click', function() {
                window.lpUI.sideMenuToggle();
              });
            });

            document.querySelectorAll('body > nav .sub-nav-container > a, body > div.sidemenu .sub-nav-container > a').forEach(linkEl => {
                linkEl.addEventListener('click', function(e) {
                  e.preventDefault();
                  e.stopPropagation();
                  var subNav = linkEl.parentElement.querySelector(':scope > .sub-nav');
                  if (subNav && subNav.classList.contains('visible')){
                    subNav.classList.remove('visible');
                  } else {
                    globalNav?.querySelectorAll('.sub-nav-container .sub-nav').forEach(globalSubNav => {
                      globalSubNav.classList.remove('visible');
                    });
                    globalSideMenu?.querySelectorAll('.sub-nav').forEach(sideMenuSubNav => {
                        sideMenuSubNav.classList.remove('visible');
                    });
                    subNav?.classList.add('visible');
                  }
                });
            });
            window.addEventListener('click', function() {
                document.querySelectorAll('nav .sub-nav.visible, .sidemenu .sub-nav.visible').forEach(subNavEl => {
                    subNavEl.classList.remove('visible');
                });
            });

        }

        document.addEventListener('DOMContentLoaded', lpGlobalInit);

 


    function selectorExists(selector) {
        return document.querySelector(selector) !== null;
    }

    // Function to initialize the third-party library
    function initParoller(selector = '.my-paroller') {
        var $parollerElements = $(selector);
        if ($parollerElements.length > 0 && typeof $parollerElements.paroller === 'function') {
            $parollerElements.paroller();
        }
    }

    const parollerSelector = '.my-paroller';

    if (selectorExists(parollerSelector)) {
        window.luxuryPresence.libs.loadJs(window.luxuryPresence.libs.jsLibsMap.paroller.jsSrc, function() {
            initParoller(parollerSelector);
            window.luxuryPresence.libs.jsLibsMap.paroller.isLoaded = true;
        });
    }
 

          