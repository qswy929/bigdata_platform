var dataset_detail = [
          {
            dbName:'koubei',
            title:"IJCAI-17 口碑商家客流量预测",
            subtitle:"预测2000家商家未来14天的客流",
            detail:"背景 Background\n随着移动定位服务的流行，阿里巴巴和蚂蚁金服逐渐积累了来自用户和商家的海量线上线下交易数据。蚂蚁金服的O2O平台“口碑”用这些数据为商家提供了包括交易统计，销售分析和销售建议等定制的后端商业智能服务。举例来说，口碑致力于为每个商家提供销售预测。基于预测结果，商家可以优化运营，降低成本，并改善用户体验。\n这次比赛中，我们将以恰当定义的销售预测问题为题。我们鼓励创新的解法，帮助口碑成为更加智能的商业平台，更好地服务社会。同时，希望每位参赛选手都能享受到这次比赛带来的乐趣。\n\n问题 Statement\n预测客户流量对商家的经营管理至关重要。在口碑平台上，我们将客户流量定义为“单位时间内在商家使用支付宝消费的用户人次”。在这个问题中，我们将提供用户的浏览和支付历史，以及商家相关信息，并希望参赛选手可以以此预测所有商家在接下来14天内，每天的客户流量。\n我们鼓励参赛选手使用类似天气等额外的数据，并希望参赛选手能够将数据源共享在论坛中。\n\n数据 Data\n我们提供从2015.07.01到2016.10.31（除去2015.12.12）的商家数据，用户支付行为数据以及用户浏览行为数据。提供数据的类型统一为string类型，提交预测的类型为整形。文件统一为utf-8编码，没有标题行，并以“,”分隔的csv格式。\n\n1. shop_info：商家特征数据\n2. user_pay：用户支付行为\n3. user_view：用户浏览行为\n4. prediction：测试集与提交格式",
            guidance:"sc <- bigdata.init() #初始化连接\nsqlCon <- txConnect(host = 'inceptor23i1ao-1232460318-97k0n', dbName = 'koubei')  #使用该host和dbName\ntable <- txSqlQuery(sqlConnection = sqlCon, query = 'select shop_id,city_name from shop_info limit 10')  #换成实际的query，不要使用\"select *\"\nresult <- txCollect(list(table$shop_id,table$city_name))  #选择商家id和城市名\ntxRemove(table)\ntxSqlDisconnect(sqlConnection = sqlCon)  #关闭连接",
            title_bg:{
              background:"url(../img/dataset/koubei/dataset-cover.jpeg)"
            },
            content_pic: [
              {src:"../img/dataset/koubei/table1.png"},
              {src:"../img/dataset/koubei/table2.png"},
              {src:"../img/dataset/koubei/table3.png"},
              {src:"../img/dataset/koubei/table4.png"}
            ]
          },
          {
            dbName:'iris',
            title:"Iris 鸢尾花卉数据集",
            subtitle:"将鸢尾花进行三分类",
            detail:"The Iris dataset was used in Fisher's classic 1936 paper, The Use of Multiple Measurements in Taxonomic Problems, and can also be found on the UCI Machine Learning Repository.\n\nIt includes three iris species with 50 samples each as well as some properties about each flower. One flower species is linearly separable from the other two, but the other two are not linearly separable from each other.\n\nThe columns in this dataset are\nId, SepalLengthCm, SepalWidthCm, PetalLengthCm, PetalWidthCm, Species",
            guidance:"sc <- bigdata.init() #初始化连接\nsqlCon <- txConnect(host = 'inceptor23i1ao-1232460318-97k0n', dbName = 'iris')  #使用该host和dbName\ntable <- txSqlQuery(sqlConnection = sqlCon, query = 'select SepalLengthCm, Species from iris limit 10')  #换成实际的query，不要使用\"select *\"\nresult <- txCollect(list(table$SepalLengthCm,table$Species))  #选择萼片高度和花卉种类\ntxRemove(table)\ntxSqlDisconnect(sqlConnection = sqlCon)  #关闭连接",
            title_bg:{
              background:"url(../img/dataset/iris/dataset-cover.jpg)"
            },
            content_pic: [
              {src:"../img/dataset/iris/pic1.png"}
            ]
          },
          {
            dbName:'titanic',
            title:"泰坦尼克数据集",
            subtitle:"预测船上成员的幸存情况",
            detail:"The sinking of the RMS Titanic is one of the most infamous shipwrecks in history.  On April 15, 1912, during her maiden voyage, the Titanic sank after colliding with an iceberg, killing 1502 out of 2224 passengers and crew. This sensational tragedy shocked the international community and led to better safety regulations for ships.\nOne of the reasons that the shipwreck led to such loss of life was that there were not enough lifeboats for the passengers and crew. Although there was some element of luck involved in surviving the sinking, some groups of people were more likely to survive than others, such as women, children, and the upper-class.\nIn this challenge, we ask you to complete the analysis of what sorts of people were likely to survive. In particular, we ask you to apply the tools of machine learning to predict which passengers survived the tragedy.\n\nThe data has been split into two groups:\ntraining set (train.csv)\ntest set (test.csv)\n\nThe training set should be used to build your machine learning models. For the training set, we provide the outcome (also known as the “ground truth”) for each passenger. Your model will be based on “features” like passengers’ gender and class. You can also use feature engineering to create new features.\n\nThe test set should be used to see how well your model performs on unseen data. For the test set, we do not provide the ground truth for each passenger. It is your job to predict these outcomes. For each passenger in the test set, use the model you trained to predict whether or not they survived the sinking of the Titanic.",
            guidance:"sc <- bigdata.init() #初始化连接\nsqlCon <- txConnect(host = 'inceptor23i1ao-1232460318-97k0n', dbName = 'titanic')  #使用该host和dbName\ntable <- txSqlQuery(sqlConnection = sqlCon, query = 'select pclass, survival from iris limit 10')  #换成实际的query，不要使用\"select *\"\nresult <- txCollect(list(table$pclass,table$survival))  #选择舱位和幸存情况\ntxRemove(table)\ntxSqlDisconnect(sqlConnection = sqlCon)  #关闭连接",
            title_bg:{
              background:"url(../img/dataset/titanic/dataset-cover.png)"
            },
            content_pic: [
              {src:"../img/dataset/titanic/pic1.png"}
            ]
          }
];
