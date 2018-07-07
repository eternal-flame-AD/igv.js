function createTrackList(div) {

    var tracks = testTracks();

    tracks.forEach(function (track) {

        var trackDiv = document.createElement('div');
        trackDiv.innerHTML = track.name;
        trackDiv.addEventListener('click', function (event) {

            // Convert to json to insure we can load json representations (not strictly neccessary).
            var json = JSON.stringify(track);

            igv.browser.loadTrack(json);
        });

        div.appendChild(trackDiv);
    })

    function testTracks() {


        var tracks = [
            {
                url: '../test/data/bedpe/hg19_myc.bedpe',
                type: 'interaction',
                format: 'bedpe',
                name: 'MYC Interactions'
            },
            {
                url: 'https://s3-us-west-2.amazonaws.com/ilmn.igv-test/test2.bigWig',
                name: 'Big BigWig'
            },
            {
                url: 'https://www.encodeproject.org/files/ENCFF356YES/@@download/ENCFF356YES.bigWig',
                name: 'ctcf bigwig'
            },
            {
                url: 'https://data.broadinstitute.org/igvdata/1KG/ALL.wgs.phase3_shapeit2_mvncall_integrated_v5b.20130502.sites.vcf.gz',
                indexURL: 'https://data.broadinstitute.org/igvdata/1KG/ALL.wgs.phase3_shapeit2_mvncall_integrated_v5b.20130502.sites.vcf.gz.tbi',
                visibilityWindow: 20000,
                name: '1KG Sites'
            },
            {
                type: 'variant',
                url: 'https://s3.amazonaws.com/igv.broadinstitute.org/data/hg19/1kg/ALL.chr22.phase3_shapeit2_mvncall_integrated_v5a.20130502.genotypes.vcf.gz',
                name: '1KG variants',
                visibilityWindow: 1000
            },
            {
                sourceType: 'gcs',
                type: 'alignment',
                url: 'gs://genomics-public-data/platinum-genomes/bam/NA12877_S1.bam',
                height: 500,
                autoHeight: false,
                viewAsPairs: false,
                name: 'Google storage BAM (NA12877)'
            },
            {
                // Public google drive share links.  Different forms used for url and indexURL to test both
                type: 'alignment',
                format: 'bam',
                url: 'https://drive.google.com/open?id=0B-lleX9c2pZFZVZyVTdkSFZ2cm8',
                indexURL: 'https://drive.google.com/file/d/0B-lleX9c2pZFbDJ4VVRxakJzVGM/view?usp=sharing',
                name: 'Google Drive BAM (GSTT1)'
            },

            {
                sourceType: 'ga4gh',
                type: 'bam',
                url: 'https://genomics.googleapis.com/v1',
                readGroupSetIds: 'CMvnhpKTFhCjz9_25e_lCw',
                height: 200,
                autoHeight: false,
                viewAsPairs: false,
                name: 'Ga4gh alignments'
            },
            {
                sourceType: 'ga4gh',
                type: 'vcf',
                url: 'https://genomics.googleapis.com/v1',
                variantSetId: '10473108253681171589',
                visibilityWindow: 10000,
                name: 'Ga4gh variants'
            },

            {
                sourceType: 'ga4gh',
                type: 'variant',
                url: 'https://genomics.googleapis.com/v1',
                variantSetId: ['10473108253681171589'],
                callSetIds: ['10473108253681171589-2'],
                visibilityWindow: 100000,
                name: 'Ga4gh variants'
            },

            {
                sourceType: 'ga4gh',
                type: 'variant',
                url: 'https://genomics.googleapis.com/v1',
                variantSetId: ['10473108253681171589'],
                includeCalls: false,
                visibilityWindow: 100000,
                name: 'Ga4gh variants'
            },

            {
                name: 'cBio seg',
                type: 'seg',
                displayMode: 'EXPANDED',
                sourceType: 'custom',
                source: {
                    url: 'http://www.cbioportal.org/beta/api-legacy/copynumbersegments',
                    method: 'POST',
                    contentType: 'application/x-www-form-urlencoded',
                    body: 'cancerStudyId=acc_tcga&chromosome=$CHR&sampleIds=TCGA-OR-A5J1-01,TCGA-OR-A5K3-01'
                }
            },


            {
                url: 'https://data.broadinstitute.org/igvdata/test/igv-web/segmented_data_080520.seg.gz',
                indexed: false,
                isLog: true,
                name: 'GBM Copy # (TCGA Broad GDAC)'
            },
            {
                url: 'https://s3.amazonaws.com/igv.broadinstitute.org/annotations/hg19/genes/gencode.v18.collapsed.bed.gz',
                indexURL: 'https://s3.amazonaws.com/igv.broadinstitute.org/annotations/hg19/genes/gencode.v18.collapsed.bed.gz.tbi',
                name: 'gencode'
            },

            {
                type: 'bed',
                url: '../test/data/bed/gencode.v18.collapsed.bed',
                indexURL: '../test/data/bed/gencode.v18.collapsed.bed.idx',
                name: 'Gencode v18'
            },

            {
                type: 'bed',
                url: 'https://data.broadinstitute.org/igvdata/annotations/hg19/dbSnp/snp137.hg19.bed.gz',
                indexURL: 'https://data.broadinstitute.org/igvdata/annotations/hg19/dbSnp/snp137.hg19.bed.gz.tbi',
                name: 'dbSNP 137',
                visibilityWindow: 200000
            },


            {
                url: 'https://www.encodeproject.org/files/ENCFF002ADR/@@download/ENCFF002ADR.bigBed',
                name: 'ENCFF002ADR',
                visibilityWindow: 2000000,
                height: 50,
                autoHeight: false
            },

            {
                url: 'http://hgdownload.cse.ucsc.edu/goldenPath/hg19/encodeDCC/wgEncodeBroadHistone/wgEncodeBroadHistoneGm12878H3k4me3StdSig.bigWig',
                name: 'Gm12878H3k4me3'
            },

            {
                url: 'https://data.broadinstitute.org/igvdata/encode/hg19/broadHistone/wgEncodeBroadHistoneGm12878H3k4me2StdSig.wig.tdf',
                name: 'GM12878H3k4m3 (tdf)'
            },


            {
                url: 'https://s3.amazonaws.com/igv.broadinstitute.org/annotations/hg19/genes/gencode.v24lift37.annotation.sorted.gtf.gz',
                indexURL: 'https://s3.amazonaws.com/igv.broadinstitute.org/annotations/hg19/genes/gencode.v24lift37.annotation.sorted.gtf.gz.tbi',
                name: 'Gencode v24',
                format: 'gtf',
                visibilityWindow: 10000000
            },
            //
            // {
            //     type: 'eqtl',
            //     sourceType: 'gtex-ws',
            //     url: 'https://dev.gtexportal.org/rest/v1/association/singleTissueEqtlByLocation',
            //     tissueName: 'Adipose_Subcutaneous',
            //     name: 'Adipose - Subcutaneous',
            //     visibilityWindow: 1000000
            // },
            //
            {
                name: 'htsget bam (Sanger)',
                type: 'alignment',
                sourceType: 'htsget',
                endpoint: 'http://35.196.212.220',
                id: 'genomics-public-data/platinum-genomes/bam/NA12877_S1.bam'
            },
            {
                name: 'htsget bam (DNANexus',
                type: 'alignment',
                sourceType: 'htsget',
                endpoint: 'http://htsnexus.rnd.dnanex.us/v1',
                id: 'BroadHiSeqX_b37/NA12878',
                name: 'NA12878'
            },
            {
                name: "Sharded Bam",
                type: "alignment",
                sourceType: "shardedBam",
                sources: {
                    sequences: ["21", "22"],
                    url: "gs://igv-bam-test/mock/recalibrated.$CHR.bam",
                    indexURL: "gs://igv-bam-test/mock/recalibrated.$CHR.bam.bai"
                }
            },
            {
                name: "Known Genes (UCSC service)",
                type: "annotation",
                displayMode: "EXPANDED",
                sourceType: "ucscservice",
                source: {
                    url: "http://localhost:5000/ucsc?db=hg19",
                    method: "GET",
                    tableName: 'knownGene'
                }
            },
            {
                name: "SNP 141 (UCSC service)",
                type: "snp",
                displayMode: "EXPANDED",
                sourceType: "ucscservice",
                visibilityWindow: 1000000,
                source: {
                    url: "http://localhost:5000/ucsc?db=hg19",
                    method: "GET",
                    tableName: 'snp141'
                }
            },
            {
                name: "CRAM file (flask server)",
                type: 'bam',
                sourceType: 'pysam',
                url: 'http://igv-load-balancer-25126049.us-east-1.elb.amazonaws.com/alignments',
                alignmentFile: '/home/ec2-user/test/data/cram_with_crai_index.cram',
                referenceFile: '/home/ec2-user/test/data/hg19mini.fa',
                label: 'CRAM file'
            }
        ];

        return tracks;
    }
}